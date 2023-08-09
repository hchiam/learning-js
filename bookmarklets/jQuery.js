javascript: fetch("https://code.jquery.com/jquery-3.7.0.min.js")
  .then((x) => x.text())
  .then((x) => {
    eval(x);
    console.log("jQuery ready");
  });
