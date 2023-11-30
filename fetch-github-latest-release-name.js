// example:
fetch("https://api.github.com/repos/hchiam/html-template-generator/releases")
  .then((r) => r.json())
  .then((r) => console.log(r[0].name));

/*
compare with:
https://github.com/hchiam/learning-js/blob/main/loadScript.js
https://github.com/hchiam/learning-js/blob/main/confetti.js
https://github.com/hchiam/learning-js/blob/main/fetch-await-example.js
*/
