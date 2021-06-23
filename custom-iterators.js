// custom iterators tutorial video: https://www.youtube.com/watch?v=eBhDBy-M7ow

/*
 * This will make [..."hey"] evaluate to ["NOPE!", "NOPE!", "NOPE!"]
 */
String.prototype[Symbol.iterator] = function () {
  let count = this.length;
  return {
    next() {
      if (count > 0) {
        count--;
        return { done: false, value: "NOPE!" };
      }
      // DON'T FORGET TO EVENTUALLY RETURN done: true!!!
      return { done: true };
    },
  };
};

/*
 * This makes this possible: [...range(1,4,1)]
 */
function range(start = 1, end = 10, step = 1) {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result = { done: false, value: current };
          if (current <= end) {
            current += step;
            return result;
          }

          return { done: true };
        },
      };
    },
  };
}

/*
 * imitate Python's range function (I got some ideas from https://javascript.info/iterable#symbol-iterator)
 */
function range(from, to) {
  if (typeof to === "undefined") {
    to = from;
    from = 0;
  }
  var range = {};
  range[Symbol.iterator] = function () {
    return {
      current: from,
      last: to,
      next() {
        if (this.current < this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };
  return range;
}

for (let number of range(1, 5)) {
  console.log(number);
}

for (let number of range(5)) {
  console.log(number);
}
