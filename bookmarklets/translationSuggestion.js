javascript: (() => {
  /* don't double-install */
  if (window.__st) return;
  window.__st = 1;
  if (!("Translator" in self))
    return alert("Translator API needs Chrome 138+ desktop");

  /* cache one translator per direction */
  const cache = {};
  const tx = (s, t) =>
    (cache[s + t] ??= Translator.create({
      sourceLanguage: s,
      targetLanguage: t,
    }));

  /* tiny pill while typing/debouncing */
  const pill = document.body.appendChild(
    Object.assign(document.createElement("div"), {
      style:
        "position:fixed;z-index:2147483647;background:#222;color:#fff;" +
        "padding:6px 10px;border-radius:6px;font:13px sans-serif;" +
        "pointer-events:none;display:none",
    })
  );

  /* popup with the translation (click to copy) */
  const pop = document.body.appendChild(
    Object.assign(document.createElement("div"), {
      style:
        "position:fixed;z-index:2147483647;background:#fff;color:#000;" +
        "border:2px solid #222;padding:10px 14px;border-radius:8px;" +
        "font:14px sans-serif;max-width:400px;display:none;cursor:pointer;" +
        "box-shadow:0 4px 16px rgba(0,0,0,.3)",
    })
  );

  let last = "";
  pop.onclick = async () => {
    if (!last) {
      pop.style.display = "none";
      return;
    }
    try {
      await navigator.clipboard.writeText(last);
      pop.textContent = "✓ copied to clipboard";
      setTimeout(() => {
        pop.style.display = "none";
      }, 1500);
    } catch (e) {
      pop.textContent = "⚠ copy failed: " + e.message;
    }
  };

  const place = (el, n) => {
    const r = el.getBoundingClientRect();
    n.style.left = r.left + "px";
    n.style.top = r.bottom + 4 + "px";
    n.style.display = "block";
  };

  const isInput = (el) =>
    el &&
    (el.tagName === "TEXTAREA" ||
      (el.tagName === "INPUT" && /^text$/i.test(el.type)) ||
      el.isContentEditable);

  const vis = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  let timer,
    latestRequestId = 0;
  const cancel = () => {
    clearTimeout(timer);
    ++latestRequestId;
    pill.style.display = "none";
  };

  document.addEventListener(
    "input",
    (e) => {
      const el = e.target;
      if (!isInput(el) || !vis(el)) return;
      const text = (el.value ?? el.textContent ?? "").trim();
      if (!text) {
        cancel();
        pop.style.display = "none";
        return;
      }

      pill.textContent = "⌛ thinking of translation suggestion…";
      place(el, pill);

      clearTimeout(timer);
      const myRequestId = ++latestRequestId; /* discard stale results */
      timer = setTimeout(async () => {
        try {
          const cn = /[\u4e00-\u9fff]/.test(text);
          const t = await tx(cn ? "zh-Hant" : "en", cn ? "en" : "zh-Hant");
          const r = await t.translate(text);
          if (myRequestId !== latestRequestId) return;
          pill.style.display = "none";
          last = r;
          pop.textContent = r + "  ✕";
          place(el, pop);
        } catch (err) {
          pill.textContent = "⚠ " + err.message;
        }
      }, 3000);
    },
    true
  );
})();
