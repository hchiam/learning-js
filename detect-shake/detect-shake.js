/** detectShake(({ x, y, z, magnitude, shaken }) => {}); */
function detectShake(callback = () => {}, threshold = 20) {
  let shaken = false;
  let previousVector = { x: 0, y: 0, z: 0 };
  window.addEventListener("devicemotion", (event) => {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;
    const magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    const dotProduct =
      x * previousVector.x + y * previousVector.y + z * previousVector.z;
    if (dotProduct < 0 && magnitude >= threshold) {
      shaken = true;
    }
    if (magnitude >= threshold) {
      previousVector = { x, y, z };
    }
    if (callback) {
      const data = {
        x,
        y,
        z,
        magnitude,
        shaken,
      };
      callback(data);
    }
  });
}
