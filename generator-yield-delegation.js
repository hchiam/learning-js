function* generator1() {
  yield 1;
  yield 2;
  return 4;
}

function normalFunctionReturningAnIterable() {
  return [5, 6, 7];
}

function* generator2() {
  const val = yield* generator1(); // <- here be yield delegation to another generator
  yield 3;
  yield val;
  yield* normalFunctionReturningAnIterable(); // <- here be yield delegation to an iterator
}

const it = generator2();
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3
console.log(it.next().value); // 4
console.log(it.next().value); // 5
console.log(it.next().value); // 6
console.log(it.next().value); // 7
