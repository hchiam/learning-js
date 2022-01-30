function getCursorPosition() {
  return window.getSelection().getRangeAt(0).endOffset;
}
