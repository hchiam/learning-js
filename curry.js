// https://hackernoon.com/currying-in-js-d9ddc64f162e
// run this file: node curry.js

const log1 = curry((x) => console.log(x));
const log2 = curry((x, y) => console.log(x, y));
const log3 = curry((x, y, z) => console.log(x, y, z));
log1(10); // 10
log2(10)(20); // 10 20
log3(10)(20)(30); // 10 20 30

const log4 = curryWithVariableArity((x, y, z, a) => console.log(x, y, z, a));
log4(10)(20)(30)(40); // 10 20 30 40
log4(10, 20)(30)(40); // 10 20 30 40
log4(10, 20, 30)(40); // 10 20 30 40
log4(10)(20, 30)(40); // 10 20 30 40
log4(10, 20, 30, 40); // 10 20 30 40

const log5 = curryWithBind((x, y, z, a, b) => console.log(x, y, z, a, b));
log5(10)(20)(30)(40)(50); // 10 20 30 40 50

function curry(fn) {
  if (fn.length === 0) return fn;

  return nest(fn.length, []);
  function nest(arity, args) {
    return (argument) => {
      if (arity - 1 === 0) {
        return fn(...args, argument);
      } else {
        return nest(arity - 1, [...args, argument]);
      }
    };
  }
}

function curryWithVariableArity(fn) {
  // returns a variadic curried function
  return nest(fn.length, []);
  function nest(arity, args) {
    return (...xs) => {
      if (arity - xs.length === 0) {
        return fn(...args, ...xs);
      } else {
        return nest(arity - xs.length, [...args, ...xs]);
      }
    };
  }
}

function curryWithBind(fn) {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return curryWithBind(fn.bind(null, ...args));
    }
  };
}
