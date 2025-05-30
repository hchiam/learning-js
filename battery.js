function onLowBattery(callback, threshold = 0.2) {
  navigator?.getBattery?.().then((battery) => {
    if (callback && battery.level < threshold) {
      callback();
    }
    battery.addEventListener?.("levelchange", () => {
      if (callback && battery.level < threshold) {
        callback();
      }
    });
  });
}
