function refreshSW() {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

document.getElementById("update-page").addEventListener("click", function () {
  refreshSW();
  location.href = "/";
});
