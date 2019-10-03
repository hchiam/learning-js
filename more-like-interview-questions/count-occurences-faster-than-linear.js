// https://leetcode.com/discuss/interview-question/124724/

const occurrences_linearTime =(arr, target)=> {
  let count = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == target) count++;
  }
  return count;
}

// assumes arr is sorted (ascending)
const occurrences_logarithmicTime =(arr, target)=> {
  if (arr.length < 1) return 0;

  // binary search for start of list
  const start = binSearchStart(arr, target);

  // binary search for end of list
  const end = binSearchEnd(arr, target);

  if (end == -1 || start == -1) return 0;
  return end - start + 1; // +1 due to counting posts, not fences
};

const binSearchStart =(arr, target)=> {
  if (arr[0] > target) return -1;
  if (arr[0] == target) return 0;
  let left = 0;
  let right = arr.length-1;
  let mid = -1;
  let i = -1;
  while (left <= right) { // note: <= instead of <
    mid = Math.floor((left+right)/2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] == target) {
      // move right closer to get to start, while (left<=right)
      right = mid - 1;
      i = mid;
    }
  }
  return i;
};

const binSearchEnd =(arr, target)=> {
  if (arr[arr.length-1] < target) return -1;
  if (arr[arr.length-1] == target) return arr.length-1;
  let left = 0;
  let right = arr.length-1;
  let mid = -1;
  let i = -1;
  while (left <= right) { // note: <= instead of <
    mid = Math.floor((left+right)/2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] == target) {
      // move left closer to get to end, while (left<=right)
      left = mid + 1;
      i = mid;
    }
  }
  return i;
};

console.log(0 == occurrences([1, 2, 3, 4, 5], 123));
console.log(1 == occurrences([1, 2, 3, 4, 5], 3));
console.log(2 == occurrences([1, 2, 2, 3, 4, 5], 2));
console.log(3 == occurrences([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8));
