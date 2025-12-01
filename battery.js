/** limited availability https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery */
function onLowBattery(callback, threshold = 0.4) {
  navigator?.getBattery?.().then((battery) => {
    if (callback && battery.level < threshold) {
      callback(battery.level);
    }
    battery.addEventListener?.("levelchange", () => {
      if (callback && battery.level < threshold) {
        callback(battery.level);
      }
    });
  });
}
