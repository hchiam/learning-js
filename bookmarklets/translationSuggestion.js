javascript: (() => {
  if (window.__translatorInstalledAlready) return;
  window.__translatorInstalledAlready = 1;
  if (!("Translator" in self))
    return alert("Translator API needs Chrome 138+ desktop");

  const MAX_Z_INDEX = 2147483647;
  const POPUP_OFFSET_BELOW_INPUT_PX = 4;
  const COPIED_FEEDBACK_DURATION_MS = 1500;
  const TYPING_DEBOUNCE_MS = 3000;

  const translatorCache = {};
  const getTranslator = (sourceLang, targetLang) =>
    (translatorCache[sourceLang + targetLang] ??= Translator.create({
      sourceLanguage: sourceLang,
      targetLanguage: targetLang,
    }));

  const thinkingTextClickToCancel = document.body.appendChild(
    Object.assign(document.createElement("div"), {
      style:
        `position:fixed;z-index:${MAX_Z_INDEX};background:#222;color:#fff;` +
        "padding:6px 10px;border-radius:999px;font:13px sans-serif;" +
        "cursor:pointer;display:none",
    })
  );

  const popupWithTranslationAndDismissChildren = document.body.appendChild(
    Object.assign(document.createElement("div"), {
      style:
        `position:fixed;z-index:${MAX_Z_INDEX};background:#fff;color:#000;` +
        "border:2px solid #222;padding:10px 14px;border-radius:999px;" +
        "font:14px sans-serif;max-width:400px;overflow-wrap:break-word;display:none;" +
        "box-shadow:0 4px 16px rgba(0,0,0,.3)",
    })
  );

  const translationTextClickToCopy =
    popupWithTranslationAndDismissChildren.appendChild(
      Object.assign(document.createElement("span"), {
        style: "cursor:pointer",
      })
    );

  const dismissButton = popupWithTranslationAndDismissChildren.appendChild(
    Object.assign(document.createElement("button"), {
      textContent: "✕",
      style:
        "background:none;border:none;cursor:pointer;font:inherit;" +
        "padding:0 0 0 8px;color:#999;vertical-align:top",
    })
  );

  let previousTranslation = "";

  translationTextClickToCopy.onclick = async () => {
    if (!previousTranslation) return;
    try {
      await navigator.clipboard.writeText(previousTranslation);
      translationTextClickToCopy.textContent = "✓ copied to clipboard";
      setTimeout(() => {
        popupWithTranslationAndDismissChildren.style.display = "none";
      }, COPIED_FEEDBACK_DURATION_MS);
    } catch (error) {
      translationTextClickToCopy.textContent =
        "⚠ copy failed" +
        (error.message ? ": " + error.message : error.message);
    }
  };

  dismissButton.onclick = (event) => {
    event.stopPropagation();
    popupWithTranslationAndDismissChildren.style.display = "none";
    previousTranslation = "";
  };

  const positionBelow = (inputElement, node) => {
    const rectangle = inputElement.getBoundingClientRect();
    node.style.left = rectangle.left + "px";
    node.style.top = rectangle.bottom + POPUP_OFFSET_BELOW_INPUT_PX + "px";
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

  let timer = null;
  let latestRequestId = 0;

  const cancel = () => {
    clearTimeout(timer);
    ++latestRequestId;
    thinkingTextClickToCancel.style.display = "none";
  };

  thinkingTextClickToCancel.onclick = cancel;

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
        popupWithTranslationAndDismissChildren.style.display = "none";
        return;
      }

      thinkingTextClickToCancel.textContent =
        "⌛ thinking of translation suggestion… (click to cancel)";
      positionBelow(inputElement, thinkingTextClickToCancel);

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
          thinkingTextClickToCancel.style.display = "none";
          previousTranslation = translation;
          translationTextClickToCopy.textContent = translation;
          positionBelow(inputElement, popupWithTranslationAndDismissChildren);
        } catch (error) {
          thinkingTextClickToCancel.textContent = "⚠ " + error.message;
        }
      }, TYPING_DEBOUNCE_MS);
    },
    true
  );
})();
