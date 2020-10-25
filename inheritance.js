// one of the ways to do inheritance in JavaScript:

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// and now, instead of let animal = new Animal();
// you can do this:

let dog = Object.create(Animal.prototype);
let bird = Object.create(Animal.prototype);
// (these inherit from Animal)

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent

// and to create other "classes" (not instance objects):

function Dog(tag) {
  this.tag = tag;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // otherwise constructor incorrectly points to Animal
Dog.prototype.bark = function () {
  console.log("woof");
};

let doug = new Dog(123);
console.log(doug.constructor);
doug.eat();
doug.bark();
console.log(doug.tag);
