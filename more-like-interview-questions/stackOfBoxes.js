// get max height of stack of boxes, where stackable boxes are strictly smaller in all 3 dimensions
// strategy: 1) recursion 2) add memoization

let boxes = [{h:0,w:0,d:0}];
console.log(getMaxH(boxes)); // 0

boxes = [{h:1,w:1,d:1}, {h:2,w:2,d:2}, {h:3,w:3,d:3}]; // 6
console.log(getMaxH(boxes)); // 6

boxes = [{h:2,w:2,d:4}, {h:3,w:3,d:5}, {h:4,w:4,d:4}]; // 5
console.log(getMaxH(boxes)); // 5

boxes = [{h:1,w:1,d:1}, {h:2,w:2,d:3}, {h:3,w:3,d:3}]; // 4
console.log(getMaxH(boxes)); // 4

function getMaxH(boxes) {
  const memo = {};
  const b = boxes.sort((a,b) => {
    const descending = b.h - a.h;
    return descending;
  });
  let maxH = b[0].h;
  
  loopThroughDifferentBases:
  for (let startingIndex = 0; startingIndex < b.length; startingIndex++) {
    maxH = Math.max(maxH, recurse(b, startingIndex, memo));
  }
  return maxH
}

function recurse(b, i, memo) {
  const atEnd = i >= b.length;
  if (atEnd) return 0;
  if (memo[i]) return memo[i];
  
  const currentBox = b[i];
  let maxH = currentBox.h;
  
  loopThroughDifferentNextBoxes:
  for (let j = i + 1; j < b.length; j++) {
    const nextBox = b[j];
    if (stackable(currentBox, nextBox)) {
      const nextBoxH = currentBox.h + recurse(b, j, memo);
      maxH = Math.max(maxH, nextBoxH);
    }
  }
  
  memo[i] = maxH;
  return maxH;
}

function stackable(L, R) {
  return L.w > R.w && L.h > R.h && L.d > R.d;
}
