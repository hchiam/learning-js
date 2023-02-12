javascript: (function () {
  console.log(
    "https://developers.google.com/machine-learning/guides/rules-of-ml"
  );
  var tips = [...document.querySelectorAll("h4")];
  var randomTip = tips[Math.floor(Math.random() * tips.length)];
  randomTip.scrollIntoView();
  randomTip.style.outline = "3px solid lime";
  window.scrollBy(
    0,
    -document.querySelector(".js-sticky")?.clientHeight - 10 || -100
  );
})();
