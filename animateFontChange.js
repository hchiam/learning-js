// https://codepen.io/hchiam/pen/YPKJKMY

document.querySelector("button").addEventListener("click", () => {
  animateFontChange();
});

async function animateFontChange(
  rangeStartHex = 0x0041, // 'A'
  rangeEndHex = 0x007a, // 'z'
  speedMs = 10
) {
  const prefix = "U+" + rangeStartHex.toString(16).toUpperCase() + "-";
  for (let i = rangeStartHex; i <= rangeEndHex; i++) {
    const suffix = /*'U+' +*/ i.toString(16).toUpperCase();
    updateFontUnicodeRange(prefix + suffix);
    await sleep(speedMs);
  }
  updateFontUnicodeRange(""); // now target all characters for completion
}

function updateFontUnicodeRange(
  newUnicodeRange,
  overrideFontSrc = "local('Courier New')",
  styleClass = "mixedFont"
) {
  document.querySelector("style." + styleClass)?.remove();
  const style = document.createElement("style");
  style.classList.add(styleClass);
  const newFontFaceRule = `
    @font-face {
      font-family: ${styleClass};
      src: ${overrideFontSrc};
      unicode-range: ${newUnicodeRange};
    }
  `;
  style.textContent = newFontFaceRule;
  document.head.appendChild(style);
}

async function sleep(milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds || 1000));
}
