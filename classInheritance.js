// reference: https://stackoverflow.com/a/3658673

const ObjMaker = function () {
  this.a = "first";
};
ObjMaker.prototype.b = "second";

const obj1 = new ObjMaker();

console.log(obj1.constructor.name);
console.log(obj1.a);
console.log(obj1.b); // obj1 doesn't have b, but its parent up the prototype chain does have b

const SubObjMaker = function () {};
// SubObjMaker.prototype = new ObjMaker(); // note: deprecated way to inherit!
// modern way to inherit: (note: can't get this.a but the other way can)
SubObjMaker.prototype = Object.assign({}, ObjMaker.prototype, { c: "third" });
SubObjMaker.prototype.d = "fourth";

const obj2 = new SubObjMaker();

console.log(obj2.constructor.name);
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);
