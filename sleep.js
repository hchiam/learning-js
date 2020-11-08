// node sleep.js

// delay without nesting!

// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

async function sleep(milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds));
}

(async function () {
  console.log("run 1 thing and wait 2 seconds");
  await sleep(2000);
  console.log("run 2nd thing after 2 seconds");
})();

// https://stackoverflow.com/questions/17574571/nested-settimeout-alternative

// var func1 = function () {
//   console.log("Ran 1st function.");
// };
// var func2 = function () {
//   console.log("Ran 2nd function.");
// };
// var func3 = function () {
//   console.log("Ran 3rd function.");
// };

// var funcs = [func1, func2, func3];

// var i = 0;
// function callFuncs() {
//   funcs[i++]();
//   if (i < funcs.length) setTimeout(callFuncs, 1000);
// }

// console.log("Will call each function 1 second after another:");
// setTimeout(callFuncs, 1000);