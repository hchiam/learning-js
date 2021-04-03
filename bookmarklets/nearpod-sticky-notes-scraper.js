javascript: console.log(
  Array.from(
    document.querySelectorAll('[class^="card-wrapper"] [class^="text"]')
  ).map((x) => x.innerText.trim())
);
