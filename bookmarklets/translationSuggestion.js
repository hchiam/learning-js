javascript: (() => {
  /* don't double-install */
  if (window.__translatorInstalled) return;
  window.__translatorInstalled = 1;
  if (!("Translator" in self))
    return alert("Translator API needs Chrome 138+ desktop");

  /* cache one translator per direction */
  const translatorCache = {};
  const getTranslator = (sourceLang, targetLang) =>
    (translatorCache[sourceLang + targetLang] ??= Translator.create({
      sourceLanguage: sourceLang,
      targetLanguage: targetLang,
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
  const popup = document.body.appendChild(
    Object.assign(document.createElement("div"), {
      style:
        "position:fixed;z-index:2147483647;background:#fff;color:#000;" +
        "border:2px solid #222;padding:10px 14px;border-radius:8px;" +
        "font:14px sans-serif;max-width:400px;display:none;cursor:pointer;" +
        "box-shadow:0 4px 16px rgba(0,0,0,.3)",
    })
  );

  let lastTranslation = "";
  popup.onclick = async () => {
    if (!lastTranslation) {
      popup.style.display = "none";
      return;
    }
    try {
      await navigator.clipboard.writeText(lastTranslation);
      popup.textContent = "✓ copied to clipboard";
      setTimeout(() => {
        popup.style.display = "none";
      }, 1500);
    } catch (error) {
      popup.textContent = "⚠ copy failed: " + error.message;
    }
  };

  const positionBelow = (inputElement, node) => {
    const rectangle = inputElement.getBoundingClientRect();
    node.style.left = rectangle.left + "px";
    node.style.top = rectangle.bottom + 4 + "px";
    node.style.display = "block";
  };

  const isInput = (element) =>
    element &&
    (element.tagName === "TEXTAREA" ||
      (element.tagName === "INPUT" && /^text$/i.test(element.type)) ||
      element.isContentEditable);

  const isVisible = (element) => {
    const rectangle = element.getBoundingClientRect();
    return rectangle.width > 0 && rectangle.height > 0;
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
    (event) => {
      const inputElement = event.target;
      if (!isInput(inputElement) || !isVisible(inputElement)) return;
      const text = (
        inputElement.value ??
        inputElement.textContent ??
        ""
      ).trim();
      if (!text) {
        cancel();
        popup.style.display = "none";
        return;
      }

      pill.textContent = "⌛ thinking of translation suggestion…";
      positionBelow(inputElement, pill);

      clearTimeout(timer);
      const myRequestId = ++latestRequestId; /* discard stale results */
      timer = setTimeout(async () => {
        try {
          const isChinese = /[\u4e00-\u9fff]/.test(text);
          const translator = await getTranslator(
            isChinese ? "zh-Hant" : "en",
            isChinese ? "en" : "zh-Hant"
          );
          const translation = await translator.translate(text);
          if (myRequestId !== latestRequestId) return;
          pill.style.display = "none";
          lastTranslation = translation;
          popup.textContent = translation + "  ✕";
          positionBelow(inputElement, popup);
        } catch (error) {
          pill.textContent = "⚠ " + error.message;
        }
      }, 3000);
    },
    true
  );
})();
