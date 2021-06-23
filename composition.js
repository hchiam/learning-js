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
