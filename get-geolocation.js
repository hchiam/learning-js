// for more info: https://web.dev/devices-introduction/

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (error) => {
    console.log(error);
  }
);
