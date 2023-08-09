console.log(isOnline());

window.addEventListener("online", function (e) {
  console.log("window.addEventListener('online'");
});

function isOnline() {
  return !("onLine" in navigator) || navigator.onLine;
}
