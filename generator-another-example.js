function *myGenerator() {
  while (true) {
    const x = yield;
    console.log(`x = ${x}`);
  }
}

var it = myGenerator();
it.next(); // first call of .next() does not do anything yet because it stops at the yield until the next .next():
it.next('some value I can set the yield to assign to x'); // x = '...' and now runs console.log
it.next('another value like it');
it.next('and again');
it.next(); // undefined
