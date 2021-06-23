function tryCatchWrapper(mainFunction, catchFunction, ...args) {
  try {
    mainFunction(...args);
  } catch (e) {
    if (catchFunction) {
      catchFunction;
    } else {
      console.log("This is a caught error:\n\n", e);
    }
  }
}

// example usage:

var a = "some input outside the function";

tryCatchWrapper(
  function mainFunction(...inputs) {
    alert(a);
    alert(inputs);
  },
  function catchFunction() {
    alert("custom catch override");
  },
  "some custom input"
);
