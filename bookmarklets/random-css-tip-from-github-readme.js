javascript: (function () {
  var tips = [
    ...document.querySelectorAll(
      ".markdown-body > ul > li, .markdown-body > p, .markdown-body > .highlight-source-css"
    ),
  ];
  var randomTip = tips[Math.floor(Math.random() * tips.length)];
  randomTip.scrollIntoView();
  randomTip.style.outline = "3px solid yellow";
  window.scrollBy(
    0,
    -document.querySelector(".js-sticky")?.clientHeight - 10 || -100
  );
})();
