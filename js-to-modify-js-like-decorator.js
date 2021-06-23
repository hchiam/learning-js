// JS to modify JS function like a Python decorator
// https://stackoverflow.com/questions/33361320/how-to-modify-javascript-function-in-main-js-file

function functionToBeChanged(str) {
  alert(str);
}

var boringFunction = functionToBeChanged;
functionToBeChanged = function (str) {
  alert("before");
  boringFunction.call(this, str); // (you may need to review definition of "this" inside call)
  alert("after");
};

functionToBeChanged("hi");
