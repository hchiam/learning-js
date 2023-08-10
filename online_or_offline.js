console.log(isOnline());

addEventListener("online", function (e) {
  console.log("addEventListener('online'");
});

addEventListener("offline", function (e) {
  console.log("addEventListener('offline'");
});

function isOnline() {
  return !("onLine" in navigator) || navigator.onLine;
}
