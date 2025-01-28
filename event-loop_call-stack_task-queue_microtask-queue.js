// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=896s = QUICK EXPLANATION:
// use setTimeout with 0 seconds because event loop queue will be emptied after function call stack is clear

// https://www.youtube.com/watch?v=FSs_JYwnAdI

setTimeout(
  () =>
    console.log("other asynchronous tasks (in main task queue) are run 3rd"),
  0
);

Promise.resolve().then((v) =>
  console.log("promises are in microtask queue and actually run 2nd")
);

console.log("synchronous code actually runs 1st");

// synchronous code actually runs 1st
// promises are in microtask queue and actually run 2nd
// other asynchronous tasks (in main task queue) are run 3rd
