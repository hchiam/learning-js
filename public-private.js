// new to modern browsers: #privateMethodOrVariableName

function SomeClass() {
  // private members:
  let privateVariable = "hidden";
  function privateFunction() {
    console.log("you called a private function");
    return "hidden";
  }

  // public members:
  this.publicVariable = "exposed";
  this.publicFunction = function () {
    console.log("you called a public static function");
    return "exposed";
  };
}

// public prototype members:
SomeClass.prototype.publicPrototypeVariable = "exposed";
SomeClass.prototype.publicPrototypeFunction = function () {
  console.log("you called a public function");
  return "exposed";
};

// use it all:

const obj = new SomeClass();
const obj2 = new SomeClass();

console.log(obj.privateVariable); // undefined
// obj.privateFunction(); // error

console.log(obj.publicVariable);
obj.publicFunction();

console.log(obj.publicPrototypeVariable);
obj.publicPrototypeFunction();

obj.publicVariable = "edited public static variable";
console.log(obj.publicVariable);
console.log("should not affect obj2:", obj2.publicVariable);

obj.publicPrototypeVariable = "edited public variable";
console.log(obj.publicPrototypeVariable);
console.log("should not affect obj2:", obj2.publicPrototypeVariable);
