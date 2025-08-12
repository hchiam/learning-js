/** Reference: https://www.mathworks.com/help/matlab/ref/rgb2gray.html */
function rgbToGrayScaleNumber(r, g, b) {
  return Math.round(
    0.298936021293775 * r + 0.587043074451121 * g + 0.114020904255103 * b
  );
}
