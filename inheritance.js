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
