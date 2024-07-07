const promisesToAwait = [];
for (let thing of list) {
  promisesToAwait.push(slowFunction(thing)); // if you otherwise put await here, each call will run in sequence instead of concurrently!
}
await Promise.all(promisesToAwait);
