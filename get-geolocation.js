// for more info:
// https://web.dev/devices-introduction/
// https://developer.chrome.com/docs/devtools/device-mode/#geolocation

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (error) => {
    console.log(error);
  }
);
