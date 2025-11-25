/** detectShake(({ x, y, z, magnitude }) => {}); */
function detectShake(callback = () => {}) {
  window.addEventListener("devicemotion", (event) => {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;
    const magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
    const data = {
      x,
      y,
      z,
      magnitude,
    };
    if (callback) {
      callback(data);
    }
  });
}
