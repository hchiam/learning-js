// generators aren't available for IE

function generateNextNumber() {
  function* generator() {
    let number = 0;
    while (true) yield number++;
  }
  this.iterator = this.iterator ?? generator();
  return this.iterator.next().value;
}

console.log(generateNextNumber()); // 0
console.log(generateNextNumber()); // 1
console.log(generateNextNumber()); // 2
console.log(generateNextNumber()); // 3
console.log(generateNextNumber()); // 4
