// MORE READING: https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47
// Object.freeze() vs Object.seal() vs Object.preventExtensions()

// Object.freeze() seems to be the most restrictive ("actually prevents object modification"):

var object1 = {};

Object.freeze(object1);

try {
  Object.defineProperty(object1, "property1", {
    value: 42,
  });
  console.log(
    "You shouldn't see this message because you shouldn't be able to modify the object."
  );
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}
