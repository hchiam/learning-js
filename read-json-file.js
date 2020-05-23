fetch("data.json")
  .then((response) => response.json())
  .then((jsonResponse) => console.log(jsonResponse));
