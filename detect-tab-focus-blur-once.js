onTabFocus(() => alert("focus"));
onTabBlur(() => alert("blur"));

function onTabFocus(callback, settings = { once: true }) {
  window.addEventListener("focus", callback, settings);
}
function onTabBlur(callback, settings = { once: true }) {
  window.addEventListener("blur", callback, settings);
}
