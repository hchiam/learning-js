(async function () {
  const url =
    "https://raw.githubusercontent.com/ryanmcdermott/clean-code-javascript/master/README.md";
  const response = await fetch(url);
  const text = await response.text();
  console.log(text);
})();
