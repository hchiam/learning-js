let previousOrientation = screen.orientation?.type || "portrait-primary";
const originalOrientation = screen.orientation?.type || "portrait-primary";

export const ROTATION = {
  CLOCKWISE: "CLOCKWISE",
  COUNTERCLOCKWISE: "COUNTERCLOCKWISE",
  NO_CHANGE: "NO CHANGE",
  BACK_TO_ORIGINAL: "BACK_TO_ORIGINAL",
  UNKNOWN: "unknown",
};

/**
 * example usage:
 * 
detectPageRotation((rotationDirection) => {
  let rotationAngle = 0;

  switch (rotationDirection) {
    case ROTATION.CLOCKWISE:
      rotationAngle = 90;
      break;
    case ROTATION.COUNTERCLOCKWISE:
      rotationAngle = -90;
      break;
    default:
      break;
  }

  video.style.transform = `rotate(${rotationAngle}deg)`;
  canvasElement.style.transform = `rotate(${rotationAngle}deg)`;
  // Rotate video feed with x-flip when rotated
  if (rotationAngle !== 0) {
    video.style.transform = `rotate(${rotationAngle}deg) scaleY(-1)`;
    canvasElement.style.transform = `rotate(${rotationAngle}deg) scaleY(-1)`;
  }
});
 */
export function detectPageRotation(callback) {
  if (screen.orientation) {
    screen.orientation.addEventListener("change", () => {
      const currentOrientation = screen.orientation.type;
      let rotationDirection = ROTATION.UNKNOWN;

      // Check if we're back to original orientation
      if (
        currentOrientation === originalOrientation &&
        previousOrientation !== originalOrientation
      ) {
        rotationDirection = ROTATION.BACK_TO_ORIGINAL;
      } else {
        // map orientations to degrees for easier comparison
        const orientationMap = {
          "portrait-primary": 0,
          "landscape-primary": 90,
          "portrait-secondary": 180,
          "landscape-secondary": 270,
        };

        const prevDegrees = orientationMap[previousOrientation] || 0;
        const currDegrees = orientationMap[currentOrientation] || 0;
        let degreeDiff = currDegrees - prevDegrees;

        // normalize the difference to -180 to 180 range
        if (degreeDiff > 180) degreeDiff -= 360;
        if (degreeDiff < -180) degreeDiff += 360;

        if (degreeDiff > 0) {
          rotationDirection = ROTATION.CLOCKWISE;
        } else if (degreeDiff < 0) {
          rotationDirection = ROTATION.COUNTERCLOCKWISE;
        } else {
          rotationDirection = ROTATION.NO_CHANGE;
        }
      }

      previousOrientation = currentOrientation;

      if (callback) callback(rotationDirection);
    });
  }
}
