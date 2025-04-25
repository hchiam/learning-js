function getTextHeight(text, font) {
  const tempCanvas = document.createElement("canvas");
  const ctx = tempCanvas.getContext("2d");
  ctx.font = font ?? "1rem Arial";
  const measurements = ctx.measureText(text);
  return (
    measurements.fontBoundingBoxAscent + measurements.fontBoundingBoxDescent
  );
}
