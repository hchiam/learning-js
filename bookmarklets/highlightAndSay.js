javascript: (function () {
  window.highlightWhatYouClick = !window.highlightWhatYouClick;
  console.log("Run again to toggle.");

  const overlay = document.createElement("div");
  overlay.id = "sentence-overlay";
  overlay.style.cssText = `
    position: fixed;
    background: rgba(255, 215, 0, 0.3);
    pointer-events: none;
    z-index: 10000;
    border-radius: 3px;
    display: none;
  `;
  document.body.appendChild(overlay);

  window.say = function (what, voiceLang, callback) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(what);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voiceLang
      ? voices.filter((v) => v.lang === voiceLang)[0]
      : voices[0];
    utterance.onend = callback;
    if (utterance.voice?.voiceURI) {
      utterance.voiceURI = utterance.voice.voiceURI;
    }
    if (utterance.voice?.lang) {
      utterance.lang = utterance.voice.lang;
    }
    speechSynthesis.speak(utterance);
  };

  function getCaretInfo(x, y) {
    if (document.caretRangeFromPoint) {
      return document.caretRangeFromPoint(x, y);
    } else if (document.caretPositionFromPoint) {
      return document.caretPositionFromPoint(x, y);
    }
    return null;
  }

  function getLineRange(x, y) {
    const info = getCaretInfo(x, y);
    if (!info) return null;

    // find closest parent paragraph/div/article container:
    let container = info.startContainer || info.offsetNode;
    while (container && !["P", "DIV", "ARTICLE"].includes(container.nodeName)) {
      container = container.parentElement;
    }

    if (!container) return null;

    const containerRect = container.getBoundingClientRect();

    const lineRange = document.createRange();

    // find start of line by moving left
    let startInfo = getCaretInfo(containerRect.left, y);
    if (startInfo) {
      if (startInfo.startContainer) {
        lineRange.setStart(startInfo.startContainer, startInfo.startOffset);
      } else {
        lineRange.setStart(startInfo.offsetNode, startInfo.offset);
      }
    } else {
      if (info.startContainer) {
        lineRange.setStart(info.startContainer, info.startOffset);
      } else {
        lineRange.setStart(info.offsetNode, info.offset);
      }
    }

    // find end of line by moving right
    let endInfo = getCaretInfo(containerRect.right, y);
    if (endInfo) {
      if (endInfo.startContainer) {
        lineRange.setEnd(endInfo.startContainer, endInfo.startOffset);
      } else {
        lineRange.setEnd(endInfo.offsetNode, endInfo.offset);
      }
    } else {
      if (info.startContainer) {
        lineRange.setEnd(info.startContainer, info.startOffset);
      } else {
        lineRange.setEnd(info.offsetNode, info.offset);
      }
    }

    return lineRange;
  }

  [...document.querySelectorAll("*")].forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      if (!window.highlightWhatYouClick) {
        overlay.style.display = "none";
        return;
      }

      const range = getLineRange(e.clientX, e.clientY);
      if (!range) {
        overlay.style.display = "none";
        return;
      }

      const currentLineText = range.toString().trim();
      const rect = range.getBoundingClientRect();

      const hasNoTextToRead =
        !currentLineText || !rect || currentLineText.match(/^[\s\W]*$/);
      if (hasNoTextToRead) {
        overlay.style.display = "none";
        return;
      }

      overlay.style.display = "block";
      overlay.style.left = `${rect.left}px`;
      overlay.style.top = `${rect.top}px`;
      overlay.style.width = `${rect.width}px`;
      overlay.style.height = `${rect.height}px`;

      overlay.dataset.text = currentLineText;
    });
  });

  document.addEventListener("click", (e) => {
    if (!window.highlightWhatYouClick) return;
    e.stopPropagation();

    if (overlay.style.display === "block") {
      say(overlay.dataset.text);
    }
  });

  // hide overlay when not hovering over text:
  document.addEventListener("mouseover", (e) => {
    if (!overlay.contains(e.target)) {
      overlay.style.display = "none";
    }
  });
})();
