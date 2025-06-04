javascript: (() => {
  const reservedShowAllShortcut = "~~";
  let textExpanderMemory = localStorage.textExpanderBookmarkletMemory;
  if (textExpanderMemory) {
    textExpanderMemory = JSON.parse(textExpanderMemory);
  } else {
    textExpanderMemory = {
      "~xss": `<script>alert("xss");</script>`,
      "~script": "<script></script>",
      "~style": "<style></style>",
      "~div": "<div></div>",
    };
    localStorage.textExpanderBookmarkletMemory =
      JSON.stringify(textExpanderMemory);
  }
  const overlay = document.createElement("div");
  overlay.id = "keypressBookmarkletOverlay";
  overlay.style.position = "fixed";
  overlay.style.bottom = "10px";
  overlay.style.left = "-100%";
  overlay.style.padding = "10px";
  overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
  overlay.style.color = "white";
  overlay.style.zIndex = "10000";
  overlay.style.borderRadius = "5px";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.style.fontSize = "16px";
  overlay.style.userSelect = "none";
  overlay.style.cursor = "pointer";
  overlay.style.opacity = "0";
  overlay.style.transition = "left 0.2s, opacity 0.2s, padding 0.2s";

  overlay.addEventListener("mouseover", () => {
    overlay.style.filter = "invert(1)";
  });

  overlay.addEventListener("click", () => {
    const key = overlay.innerText;
    const showAll = key === reservedShowAllShortcut;
    if (showAll) {
      alert(
        JSON.stringify(
          JSON.parse(localStorage.textExpanderBookmarkletMemory),
          null,
          2
        )
      );
    } else {
      const expandedText = textExpanderMemory[key];
      if (expandedText) {
        const yes = confirm(
          `Copy the following to clipboard? \n\n${expandedText}`
        );
        if (yes) copy(expandedText);
      }
    }
  });

  document.body.appendChild(overlay);

  let timeoutId = null;
  let overlayText = "";

  document.addEventListener("keydown", (event) => {
    if (document.activeElement.type === "password") {
      resetOverlay();
      return;
    }

    if (
      event.ctrlKey ||
      event.altKey ||
      event.metaKey ||
      event.key.length > 1
      /* || event.shiftKey */
    ) {
      return;
    }

    overlayText += event.key;

    const showAll = overlayText === reservedShowAllShortcut;
    const foundMatch = Object.keys(textExpanderMemory).some((key) =>
      key.startsWith(overlayText)
    );

    if (!showAll && !foundMatch) {
      resetOverlay();
      return;
    }

    overlay.innerText = overlayText;
    overlay.style.padding = "10px";
    overlay.style.opacity = "1";
    overlay.style.left = "10px";

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      resetOverlay();
    }, 2000);
  });

  function resetOverlay() {
    clearTimeout(timeoutId);
    overlayText = "";
    overlay.innerText = "";
    overlay.style.padding = "0";
    overlay.style.opacity = "0";
    overlay.style.filter = "";
  }

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet.insertRule(`#keypressBookmarkletOverlay kbd {
    padding: 5px 10px !important;
    font-family: Arial, sans-serif !important;
    background-color: #333 !important;
    color: #fff !important;
    border: 1px solid #b4b4b4 !important;
    box-shadow: 1px 1px 0 #fff, 2px 2px 0 rgba(0, 0, 0, 0.2) !important;
    border-radius: 3px !important;
    margin: 2px !important;
    vertical-align: middle !important;
  }`);

  function copy(text) {
    var textarea = document.createElement("textarea");
    selection = document.getSelection();
    textarea.textContent = text;
    document.body.appendChild(textarea);
    selection.removeAllRanges();
    textarea.select();
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(textarea);
    console.log(`Copied to clipboard:\n\n${text}`);
    /* alert(`Copied to clipboard:\n\n${text}`); */
  }
})();
