// my suggestion: don't use deprecated 'orientationchange' event, and dont use 'deviceorientation' event unless you need it to fire constantly/often

function onDeviceOrientationChange(callback) {
  window.screen.orientation.addEventListener('change', callback);
}

// more info:
// https://web.dev/devices-introduction
// https://developers.google.com/web/fundamentals/native-hardware/device-orientation
// https://developer.chrome.com/docs/devtools/device-mode/#orientation
// https://developer.mozilla.org/en-US/docs/Web/API/Window/orientationchange_event
// https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/change_event

if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation", // first "constantly" (because "always" detecting)
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
