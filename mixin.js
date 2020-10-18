// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects

// sometimes inheritance doesn't make sense for unrelated objects (e.g. bird and airplane)

const flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};

const bird = {
  name: "Brad",
  legCount: 2,
};

const airplane = {
  passengerCount: 1000,
};

flyMixin(bird);
flyMixin(airplane);

console.log("both bird and airplane can fly");
console.log(typeof bird.fly !== "undefined");
console.log(typeof airplane.fly !== "undefined");
