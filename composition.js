// see example: https://codepen.io/hchiam/pen/GQPgQq

const canBark = (data) => ({
  bark: () => alert(data.name + ": woof"),
});

const canMeow = (data) => ({
  meow: () => alert(data.name + ": meow"),
});

const catDog = (name) => {
  let data = {};
  return Object.assign({}, canBark(name), canMeow(name));
};

function create() {
  const sparky = canBark({ name: "sparky" });
  sparky.bark();
  // sparky.meow() // won't work
  const mix = catDog({ name: "chimera" });
  mix.bark();
  mix.meow();
}

// note on when to use object composition vs class inheritance:
// https://stackoverflow.com/questions/49002/prefer-composition-over-inheritance
// class inheritance: biplane needs all parts of plane
// object composition: bird only shares some stuff with plane

// object composition can use dependency injection
