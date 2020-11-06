// https://stackoverflow.com/questions/17574571/nested-settimeout-alternative

// node delay-without-nesting.js

var func1 = function () {
  console.log("Ran 1st function.");
};
var func2 = function () {
  console.log("Ran 2nd function.");
};
var func3 = function () {
  console.log("Ran 3rd function.");
};

var funcs = [func1, func2, func3];

var i = 0;
function callFuncs() {
  funcs[i++]();
  if (i < funcs.length) setTimeout(callFuncs, 1000);
}

console.log("Will call each function 1 second after another:");
setTimeout(callFuncs, 1000);
