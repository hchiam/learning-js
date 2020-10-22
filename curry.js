// reference: https://hackernoon.com/currying-in-js-d9ddc64f162e
// run this file: node curry.js

const log1 = curry((x) => console.log(x));
const log2 = curry((x, y) => console.log(x, y));
const log3 = curry((x, y, z) => console.log(x, y, z));
log1(10); // 10
log2(10)(20); // 10 20
log3(10)(20)(30); // 10 20 30
log3(10, 20)(30); // won't run because didn't cover variadic currying
log3(10)(20, 30); // won't run because didn't cover variadic currying

// the next two curry functions cover variadic currying: (variable number of parameters)

const log4 = curryWithVariableArity((x, y, z, a) => console.log(x, y, z, a));
log4(10)(20)(30)(40); // 10 20 30 40
log4(10, 20)(30)(40); // 10 20 30 40
log4(10, 20, 30)(40); // 10 20 30 40
log4(10)(20, 30)(40); // 10 20 30 40
log4(10, 20, 30, 40); // 10 20 30 40
log4(10, 20)(30, 40); // 10 20 30 40

const log5 = curryWithBind((x, y, z, a, b) => console.log(x, y, z, a, b));
log5(10)(20)(30)(40)(50); // 10 20 30 40 50
log5(10, 20)(30)(40)(50); // 10 20 30 40 50

function curry(fn) {
  if (fn.length === 0) return fn; // guard clause

  const numberOfParametersNeeded = fn.length;
  return nest(numberOfParametersNeeded, []);

  function nest(arity, args) {
    return (nextArg) => {
      const atLastArgument = arity - 1 === 0;
      if (atLastArgument) {
        return fn(...args, nextArg);
      } else {
        return nest(arity - 1, [...args, nextArg]);
      }
    };
  }
}

function curryWithVariableArity(fn) {
  // returns a variadic curried function
  const numberOfParametersNeeded = fn.length;
  return nest(numberOfParametersNeeded, []);

  function nest(arity, args) {
    return (...nextArgs) => {
      const atLastArguments = arity - nextArgs.length === 0;
      if (atLastArguments) {
        return fn(...args, ...nextArgs);
      } else {
        return nest(arity - nextArgs.length, [...args, ...nextArgs]);
      }
    };
  }
}

function curryWithBind(fn) {
  return (...args) => {
    const arity = fn.length;
    const atLastArguments = arity <= args.length;
    if (atLastArguments) {
      return fn(...args);
    } else {
      // pass in function with arguments partially applied already:
      return curryWithBind(fn.bind(null, ...args));
    }
  };
}
