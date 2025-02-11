/**
https://fireship.io/lessons/typescript-design-patterns/

for (const n of range(0, 20, 5)) {
  console.log(n); // 5, 10, 15, 20
}
*/
function range(start, end, step=1) {
  return {
    [Symbol.iterator]() { // so you can use it with "for of"
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { done: false, value: start };
      }
      return { done: true, value: end };
    }
  };
}
