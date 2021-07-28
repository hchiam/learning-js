javascript: (function () {
  for (let i = 0; i < document.styleSheets.length; i++) {
    document.styleSheets[i].disabled = true;
  }
})();
