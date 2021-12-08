// example:
fetch("https://api.github.com/repos/hchiam/html-template-generator/releases")
  .then((r) => r.json())
  .then((r) => console.log(r[0].name));
