// nodemon -x 'node getMethods.js'

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
