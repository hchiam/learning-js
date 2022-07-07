// run this in the browser:

var a = {};

async function example() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  console.log("inside", json);
  a = json;
}

await example();
console.log("outside", a);
