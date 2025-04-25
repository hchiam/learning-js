function getTextWidth(text, font) {
  const tempCanvas = document.createElement("canvas");
  const ctx = tempCanvas.getContext("2d");
  ctx.font = font ?? "1rem Arial";
  return ctx.measureText(text).width;
}
