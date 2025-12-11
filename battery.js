/** limited availability https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery */
function onLowBattery(callback, threshold = 0.4, backupCallback) {
  if (!navigator?.getBattery) {
    runBatteryCheckBackup(backupCallback);
  } else {
    navigator.getBattery().then((battery) => {
      if (callback && battery.level < threshold) {
        callback(battery.level);
        battery.addEventListener?.("levelchange", () => {
          if (callback && battery.level < threshold) {
            callback(battery.level);
          }
        });
      } else {
        runBatteryCheckBackup(backupCallback);
      }
    });
  }
}

function runBatteryCheckBackup(backupCallback) {
  const minutes = 30;
  const seconds = minutes * 60;
  const ms = seconds * 1000;
  setInterval(() => {
    if (backupCallback) backupCallback();
  }, ms);
}
