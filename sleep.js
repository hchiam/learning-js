// node sleep.js

// delay without nesting!

// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

async function sleep(milliseconds) {
  await new Promise((r) => setTimeout(r, milliseconds || 1000));
}

// example usage:

(async function () {
  console.log("run 1 thing and wait 2 seconds");
  await sleep(2000);
  console.log("run 2nd thing after 2 seconds");
})();

// or:

test();
function s(selector) {
  const result = $ ? $(selector) : document.querySelector(selector);
  if (result.is(":visible:not(:disabled)")) return result;
}
async function test() {
  s("#button_1").click();
  await sleep();
  s("#input_2").val(123);
  s("#button_3").click();
  await sleep(2000);
  s("#button_4").click();
  alert("done");
}

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
