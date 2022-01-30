function setCursorPosition(jQueryElement, cursorPosition) {
  if (!jQueryElement[0]) return;

  const range = document.createRange();
  const sel = window.getSelection();

  range.setStart(jQueryElement[0].childNodes[0], cursorPosition);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
}
