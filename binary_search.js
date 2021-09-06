const targets = [7, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -1];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answers = 0b00111111111101;

targets.map((target, i) => {
  const solution1 = middleMethod(target, array);
  const solution2 = binaryJumpsMethod(target, array);
  const answer = answers & (1 << i) ? true : false;
  console.log(solution1 === answer && solution2 === answer ? "OK" : "ERROR");
});

function middleMethod(target, array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    // let middle = Math.floor((left + right) / 2);
    let middle = Math.floor(left / 2 + right / 2);
    if (array[middle] === target) {
      return true;
    } else if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
}

// (note: start = -1, loop while i+jump < target, final = i+1)
// we need -1 so we can jump to 0
// we need inner loop while i+jump < target since we can jump 2x
// we need final = i+1 since our condition is < target
function binaryJumpsMethod(target, array) {
  let i = -1;
  for (let jump = array.length; jump >= 1; jump = Math.floor(jump / 2)) {
    while (isOk({ array, i: i + jump, target })) {
      i += jump;
    }
  }
  return array[i + 1] === target;
}

function isOk({ array, i, target }) {
  // this can be be easily adjusted for first match or max peak search
  return i < array.length && array[i] < target;
}
