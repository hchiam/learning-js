// IIFE for public and private methods in JS.
// https://stackoverflow.com/questions/38758981/javascript-how-to-access-properties-and-method-of-iife

let app = (function () {
  function app() {
    let name = "Howard"; // IMPORTANT: local property -> "private"
    this.sayHi = function () {
      // IMPORTANT: this (not let) -> "public"
      alert("hi, my name is " + name);
    };
  }

  return app;
})();

var a = new app();
a.sayHi();
alert(
  'The private local property "name" should be undefined: ' +
    (typeof a.name == "undefined")
);

// another example with function closures, from: https://www.w3schools.com/js/js_function_closures.asp

var add = (function () {
  var counter = 0; // "private" variable only accessible whenever you call add
  return function add_theReturnedFunction() {
    counter += 1; // update the "private" variable that's only accessible inside the IIFE
    alert('The "private" counter = ' + counter);
    return counter;
  };
})();

add();
add();
add();
