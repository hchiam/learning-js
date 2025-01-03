/**
Scale width and height to fit the lesser-available width/height while maintaining an aspect ratio:
(behaves like CSS img object-fit: contain;)
*/
function scaleToFit(availableW, availableH, aspectRatioW, aspectRatioH) {
  let scale = 1;
  const deltaW = Math.abs(availableW - aspectRatioW);
  const deltaH = Math.abs(availableH - aspectRatioH);
  if (deltaW < deltaH) {
    scale = availableW / aspectRatioW;
  } else {
    scale = availableH / aspectRatioH;
  }
  const width = Math.floor(aspectRatioW * scale);
  const height = Math.floor(aspectRatioH * scale);
  return { width, height };
}
