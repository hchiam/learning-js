// nodemon -x 'node getMethods.js'

/**
 * Gets the methods of a JS object.
 * This could then be used to replace methods.
 * Which in turn could be used for code reflection
 * and Aspect-Oriented Programming (AOP): https://blog.bitsrc.io/aspect-oriented-programming-in-javascript-c4cb43f6bfcc
 */

function getMethods(object, getImmediateOnly) {
  getImmediateOnly = getImmediateOnly || false;

  return Object.getOwnPropertyNames(
    getImmediateOnly ? object : Object.getPrototypeOf(object)
  ).filter(function filterForFunctions(item) {
    return typeof object[item] === "function";
  });
}

exampleUse();

function exampleUse() {
  var object = {
    prop: 123,
    method1: function () {},
    method2: function () {},
  };
  var getImmediateOnly = true;
  console.log("\nimmediate methods only:\n");
  console.log(getMethods(object, getImmediateOnly));
  console.log("\nall methods only:\n");
  console.log(getMethods(object));
}
