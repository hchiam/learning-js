function keepLoopingIndexInRange(i, array) {
  i = i % array.length;
  return i < 0 ? i + array.length : i;
}

console.log(-7 % 5 === -2);

console.log(1 % 5 === 1);
console.log(0 % 5 === 0);
console.log(-1 % 5 === -1);
console.log(-2 % 5 === -2);
console.log(-3 % 5 === -3);
console.log(-4 % 5 === -4);
console.log(-5 % 5 === 0);
console.log(-6 % 5 === -1);

console.log(2 === keepLoopingIndexInRange(7, [1, 2, 3, 4, 5]));
console.log(3 === keepLoopingIndexInRange(-7, [1, 2, 3, 4, 5]));
