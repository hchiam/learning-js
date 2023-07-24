function detectOffline(offlineCallback, onlineCallback) {
  window.addEventListener("offline", () => {
    if (offlineCallback) offlineCallback();
  });
  window.addEventListener("online", () => {
    if (onlineCallback) onlineCallback();
  });
}
