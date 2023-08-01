javascript: fetch(
  "https://cdn.jsdelivr.net/npm/blingblingjs@latest/dist/index.min.js"
)
  .then((x) => x.text())
  .then((x) => {
    eval(x);
    $ = $.default;
    console.log("💲 BlingBlingJS ready 💲");
  });
