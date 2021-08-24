// more info:
// https://web.dev/devices-introduction
// https://developers.google.com/web/fundamentals/native-hardware/device-orientation
// https://developer.chrome.com/docs/devtools/device-mode/#orientation

if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    function deviceOrientationHandler(event) {
      console.log("deviceOrientationHandler", event);
    },
    false
  );
  console.log("DeviceOrientationEvent is supported.");
}

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", function deviceMotionHandler(event) {
    console.log("deviceMotionHandler", event);
  });
  setTimeout(function stopJump() {
    console.log("stop jump");
  }, 3 * 1000);
  console.log("DeviceMotionEvent is supported.");
}
