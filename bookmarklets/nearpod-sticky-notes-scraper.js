javascript: console.log(
  Array.from(
    document.querySelectorAll('[class^="card-wrapper"] [class^="content"]')
  ).map((x) => x.innerText.trim())
);
