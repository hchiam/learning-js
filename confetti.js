fetch(
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js"
)
  .then((x) => x.text())
  .then((x) => eval(x))
  .then((x) => confetti());

/*
compare with:
https://github.com/hchiam/learning-js/blob/main/loadScript.js
https://github.com/hchiam/learning-js/blob/main/fetch-await-example.js
https://github.com/hchiam/learning-js/blob/main/fetch-github-latest-release-name.js
*/
