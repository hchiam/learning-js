fetch("data.json", { mode: "no-cors" })
  .then((response) => response.json())
  .then((jsonResponse) => console.log(jsonResponse));
