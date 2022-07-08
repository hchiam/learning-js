const prototype = { property: "val" };

const myObject = function (options) {
  return Object.assign({}, prototype, options);
};

o = myObject({ property: "custom value" });

alert(o.property);

/**
 * https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
 * and
 * https://www.youtube.com/watch?v=wfMtDGfHWpA
 *
 * Prefer object composition over class inheritance.
 */
function composedObject(words) {
  const objectToOverride = {};
  return Object.assign(objectToOverride, optObject1, optionsAndFuncs2(words));
}

const optObject1 = { option: 1 };

const optionsAndFuncs2 = (words) => {
  return {
    option2: 2,
    shout: () => {
      console.log(`"${words}!!!"`);
    },
  };
};

composedObject("Hey").shout();

const a = new composedObject("asdfasdf");
a.shout();
