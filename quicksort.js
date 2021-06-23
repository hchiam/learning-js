function quickSort(array) {
  let left = [];
  let right = [];

  let handleOneElement = array.length <= 1;
  if (handleOneElement) {
    return array;
  }

  let handleTwoElements = array.length == 2;
  if (handleTwoElements) {
    let outOfOrder = array[0] > array[1];
    if (outOfOrder) {
      return [array[1], array[0]];
    } else {
      return array;
    }
  }

  // otherwise fill left, same, and right
  let pivot = array[0];
  let same = [];
  for (let i = 0; i < array.length; i++) {
    let e = array[i];
    if (e < pivot) {
      left.push(e);
    } else if (e == pivot) {
      same.push(e);
    } else {
      right.push(e);
    }
  }
  left = left.concat(same);

  // recursive call
  let output = quickSort(left).concat(quickSort(right));

  return output;
}

console.log([2, 4, 1, 3]);
console.log(quickSort([2, 4, 1, 3]));
console.log([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
