function Bird(name) {
  this.name = name;
}

Bird.prototype = {
  constructor: Bird, // <-- !!! don't forget this! (otherwise brad.constructor could be something else)
  numberOfLegs: 2,
  eat: function (food) {
    console.log(`${this.name} is pecking ${food}.`);
  },
  sing: function () {
    console.log(`${this.name} is singing.`);
  },
};

// // instead of this:

// Bird.prototype.eat = function (food) {
//   console.log(`Pecking ${food}.`);
// };

// Bird.prototype.sing = function () {
//   console.log("Singing.");
// };

/**
 * you can only use prototype functions and props
 * AFTER they're defined on the prototype:
 */
const myBird = new Bird("Brad");
console.log(`The bird ${myBird.name} has ${myBird.numberOfLegs} legs.`);
myBird.eat("seeds");
myBird.sing();
