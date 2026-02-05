// latest version: https://github.com/hchiam/is-chrome/blob/master/is-chrome.js

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  var useChromeElement = document.getElementById("use-chrome");
  if (!useChromeElement) {
    useChromeElement = document.createElement("p");
    document.body.prepend(useChromeElement);
  }
  useChromeElement.innerText = "For best results, open this page in Chrome.";
}
