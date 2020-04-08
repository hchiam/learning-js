function *myGenerator() {
  while (true) {
    const x = yield;
    console.log(`x = ${x}`);
  }
}

var it = myGenerator();
it.next(); // first call of .next does not do anything yet
it.next('some value I can set the yield to assign to x');
it.next('another value like it');
it.next('and again');
it.next(); // undefined
