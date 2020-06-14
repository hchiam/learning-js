const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
Promise.all(items.map(async (item) => {
  // do async stuff here
  console.log(item);
}));

// more info on using Promise/await/async (a)synchronously/sequentially/parallel-ly: 
// https://medium.com/@patarkf/synchronize-your-asynchronous-code-using-javascripts-async-await-5f3fa5b1366d

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
