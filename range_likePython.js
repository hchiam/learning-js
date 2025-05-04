/**
rangeArray(0, 20, 5); // [ 0, 5, 10, 15 ]

for (const n of rangeArray(0, 20, 5)) {
  console.log(n); // 0, 5, 10, 15
}
*/
function rangeArray(start, end, step = 1) {
  const output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

/**
https://fireship.io/lessons/typescript-design-patterns/

for (const n of range(0, 20, 5)) {
  console.log(n); // 5, 10, 15, 20
}
*/
function range(start, endInclusive, step=1) {
  return {
    [Symbol.iterator]() { // so you can use it with "for of"
      return this;
    },
    next() {
      if (start < endInclusive) {
        start = start + step;
        return { done: false, value: start };
      }
      return { done: true, value: endInclusive };
    }
  };
}
