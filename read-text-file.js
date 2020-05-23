fetch("file.txt", { mode: "no-cors" })
  .then((response) => response.text())
  .then((text) => console.log(text));
