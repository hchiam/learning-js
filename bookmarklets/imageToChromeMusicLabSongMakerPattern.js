javascript: (() => {
  const isInRightSite = window.location.href.startsWith(
    "https://musiclab.chromeexperiments.com/Song-Maker"
  );
  if (!isInRightSite) {
    alert("Please try again in Chrome Music Labs Song Maker.");
    return;
  }
  const overlay = document.createElement("div");
  createOverlayPanel();
  function createOverlayPanel() {
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: monospace, sans-serif;
    `;
    const overlayPanel = document.createElement("div");
    overlayPanel.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 32rem;
        text-align: center;
    `;
    const nonWrappingDash = "&#8209;";
    overlayPanel.innerHTML = `
        <h2 style="text-wrap: balance;">Image${nonWrappingDash}to${nonWrappingDash}Pattern Auto${nonWrappingDash}Filler</h2>
        <p style="text-wrap: balance;">Choose an image (ideally black${nonWrappingDash}and${nonWrappingDash}white):</p>
        <input type="file" id="imageInput" accept="image/*" style="margin: 1rem;">
        <div style="display: flex; gap: 1rem; justify-content: center; margin: 1rem;">
          <label style="display: flex; flex-direction: column; align-items: center;">
            <span>Grid Width:</span>
            <input type="number" id="gridWidth" min="1" value="16" style="width: 4rem; text-align: center;">
          </label>
          <label style="display: flex; flex-direction: column; align-items: center;">
            <span>Grid Height:</span>
            <input type="number" id="gridHeight" min="1" value="16" style="width: 4rem; text-align: center;">
          </label>
        </div>
        <label style="display: flex; justify-content: space-between; align-items: center;">
        <span>Threshold (0-255):</span>
        <input type="range" id="threshold" min="0" max="255" value="128" style="margin: 1rem;">
        <span id="thresholdValue">128</span>
        </label>
        <canvas id="previewCanvas" style="max-width: 19rem; max-height: 19rem; border: 0.25rem solid #ccc; margin-top: 1rem; display: none;"></canvas>
        <button id="convertBtn" style="margin: 1rem; padding: 1rem 2rem; display: none;">Convert</button>
        <button id="cancelBtn" style="margin: 1rem; padding: 1rem 2rem;">Cancel</button>
    `;
    overlay.appendChild(overlayPanel);
    document.body.appendChild(overlay);
  }
  const imageInput = overlay.querySelector("#imageInput");
  const thresholdSlider = overlay.querySelector("#threshold");
  const thresholdValue = overlay.querySelector("#thresholdValue");
  const gridWidthInput = overlay.querySelector("#gridWidth");
  const gridHeightInput = overlay.querySelector("#gridHeight");
  const convertBtn = overlay.querySelector("#convertBtn");
  const cancelBtn = overlay.querySelector("#cancelBtn");
  const previewCanvas = overlay.querySelector("#previewCanvas");
  const ctx = previewCanvas.getContext("2d");
  let imageData = null;
  thresholdSlider.addEventListener("input", () => {
    thresholdValue.textContent = thresholdSlider.value;
    if (imageData) processImage();
  });
  gridWidthInput.addEventListener("input", () => {
    if (imageData) processImage();
  });
  gridHeightInput.addEventListener("input", () => {
    if (imageData) processImage();
  });
  imageInput.addEventListener("change", (changeEvent) => {
    const file = changeEvent.target.files[0];
    if (!file) {
      alert("No file selected.");
    } else {
      const reader = new FileReader();
      reader.onload = (onloadEvent) => {
        const img = new Image();
        img.onload = () => {
          imageData = img;
          processImage(() => {
            convertBtn.style.display = "";
          });
        };
        img.src = onloadEvent.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  function processImage(doneCallback) {
    if (!imageData) {
      alert("Found no image data to process.");
      return;
    }
    const gridWidth = parseInt(gridWidthInput.value) || 16;
    const gridHeight = parseInt(gridHeightInput.value) || 16;
    previewCanvas.width = gridWidth;
    previewCanvas.height = gridHeight;
    previewCanvas.style.display = "block";
    ctx.drawImage(imageData, 0, 0, gridWidth, gridHeight);
    const pixels = ctx.getImageData(0, 0, gridWidth, gridHeight);
    const rgb = pixels.data;
    const threshold = parseInt(thresholdSlider.value);
    for (let i = 0; i < rgb.length; i += 4) {
      const r = rgb[i];
      const g = rgb[i + 1];
      const b = rgb[i + 2];
      const gray = rgbToGrayScaleNumber(r, g, b);
      const value = gray < threshold ? 0 : 255;
      rgb[i] = value;
      rgb[i + 1] = value;
      rgb[i + 2] = value;
    }
    ctx.putImageData(pixels, 0, 0);
    const previewScaleUp = 10;
    const lowResCanvas = document.createElement("canvas");
    const lowResCtx = lowResCanvas.getContext("2d");
    lowResCanvas.width = gridWidth * previewScaleUp;
    lowResCanvas.height = gridHeight * previewScaleUp;
    lowResCtx.imageSmoothingEnabled = false;
    lowResCtx.drawImage(
      previewCanvas,
      0,
      0,
      gridWidth * previewScaleUp,
      gridHeight * previewScaleUp
    );
    previewCanvas.width = gridWidth * previewScaleUp;
    previewCanvas.height = gridHeight * previewScaleUp;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lowResCanvas, 0, 0);
    doneCallback?.();
  }
  function rgbToGrayScaleNumber(r, g, b) {
    return Math.round(
      0.298936021293775 * r + 0.587043074451121 * g + 0.114020904255103 * b
    );
  }
  convertBtn.addEventListener("click", function () {
    if (!imageData) return;
    const gridWidth = parseInt(gridWidthInput.value) || 16;
    const gridHeight = parseInt(gridHeightInput.value) || 16;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = gridWidth;
    canvas.height = gridHeight;
    context.drawImage(imageData, 0, 0, gridWidth, gridHeight);
    const pixels = context.getImageData(0, 0, gridWidth, gridHeight);
    const rgb = pixels.data;
    const threshold = parseInt(thresholdSlider.value);
    const pattern = [];
    for (let y = 0; y < gridHeight; y++) {
      pattern[y] = [];
      for (let x = 0; x < gridWidth; x++) {
        const i = (y * gridWidth + x) * 4;
        const r = rgb[i];
        const g = rgb[i + 1];
        const b = rgb[i + 2];
        const gray = rgbToGrayScaleNumber(r, g, b);
        pattern[y][x] = gray < threshold;
      }
    }
    overlay.remove();
    setTimeout(() => {
      applyPatternToCMLSongMaker(pattern);
    }, 500);
  });
  cancelBtn.addEventListener("click", function () {
    overlay.remove();
  });
  function applyPatternToCMLSongMaker(pattern) {
    try {
      const selector = "#instrument-canvas";
      const canvas = document.querySelector(selector);
      if (!canvas) {
        alert(
          `Could not find ${selector} - make sure Song Maker is fully loaded.`
        );
        return;
      }
      console.log("Found instrument canvas:", canvas);
      const rect = canvas.getBoundingClientRect();
      const canvasWidth = rect.width;
      const canvasHeight = rect.height;
      const gridCols = parseInt(gridWidthInput.value) || 16;
      const gridRows = Math.max(
        pattern.length,
        parseInt(gridHeightInput.value) || 16
      );
      const cellWidth = canvasWidth / gridCols;
      const cellHeight = canvasHeight / gridRows;
      function clickAtCanvasPosition(x, y) {
        const clientX = rect.left + x;
        const clientY = rect.top + y;
        const mouseDown = new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: clientX,
          clientY: clientY,
          button: 0,
          buttons: 1,
        });
        const mouseUp = new MouseEvent("mouseup", {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: clientX + 1,
          clientY: clientY + 1,
          button: 0,
          buttons: 0,
        });
        canvas.dispatchEvent(mouseDown);
        setTimeout(() => {
          canvas.dispatchEvent(mouseUp);
        }, 10);
      }
      const clickCount = cellClicksCount(
        pattern,
        gridRows,
        gridCols,
        cellWidth,
        cellHeight
      );
      const proceed = confirm(
        `Continue? \n\nYou might want to turn off your volume. \n\n${clickCount} notes will be added to apply pattern to Song Maker...`
      );
      if (!proceed) return;
      console.log(`Scheduled ${clickCount} canvas clicks`);
      cellClicksCount(
        pattern,
        gridRows,
        gridCols,
        cellWidth,
        cellHeight,
        (x, y, cellCenterX, cellCenterY) => {
          try {
            clickAtCanvasPosition(cellCenterX, cellCenterY);
            console.log(
              `Clicked grid cell [${x}, ${y}] at canvas position (${cellCenterX}, ${cellCenterY})`
            );
          } catch (e) {
            console.error(`Error clicking canvas at [${x}, ${y}]:`, e);
          }
        }
      );
      if (clickCount === 0) {
        alert(
          "No cells were clicked. The image might be too light or the threshold too high. Try adjusting the threshold."
        );
      } else {
        setTimeout(() => {
          alert("Done.");
        }, clickCount * 150);
      }
    } catch (error) {
      console.error("Error applying pattern:", error);
      alert("Error applying pattern. Check console for details.");
    }
  }
  function cellClicksCount(
    pattern,
    gridRows,
    gridCols,
    cellWidth,
    cellHeight,
    clickCallbackAtXY
  ) {
    let clickCount = 0;
    for (let y = 0; y < Math.min(pattern.length, gridRows); y++) {
      for (let x = 0; x < Math.min(pattern[y].length, gridCols); x++) {
        if (pattern[y][x]) {
          const cellCenterX = (x + 0.5) * cellWidth;
          const cellCenterY = (y + 0.5) * cellHeight;
          setTimeout(() => {
            clickCallbackAtXY?.(x, y, cellCenterX, cellCenterY);
          }, clickCount * 150);
          clickCount++;
        }
      }
    }
    return clickCount;
  }
})();
