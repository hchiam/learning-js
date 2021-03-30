javascript: fetch(
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js"
)
  .then((x) => x.text())
  .then((x) => eval(x))
  .then((x) => confetti());
