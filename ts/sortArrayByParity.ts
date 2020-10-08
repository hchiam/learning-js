const numbers = [1, 2, 3, 4, 6];

testTheIsCorrectFunction();
console.log(isCorrect(sortArrayByParity_2passes(numbers)));
console.log(isCorrect(sortArrayByParity_inPlace(numbers)));
console.log(isCorrect(sortArrayByParity_inPlaceButCleverer(numbers)));
console.log(isCorrect(sortArrayByParity_smartSortCallback(numbers)));

function sortArrayByParity_2passes(A: number[]): number[] {
  // time O(n), space O(n)
  let iEven: number = 0;
  let iOdd: number = 0;
  const output: number[] = new Array(A.length).fill(-1);
  for (let i: number = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      iOdd++;
    }
  }
  for (let i: number = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      output[iEven] = A[i];
      iEven++;
    } else {
      output[iOdd] = A[i];
      iOdd++;
    }
  }
  return output;
}

function sortArrayByParity_inPlace(A: number[]): number[] {
  // time O(n), space O(1)
  if (A.length < 2) return A;
  let iEven: number = 0;
  let iOdd: number = A.length - 1;
  while (A[iEven] % 2 === 0 && iEven < A.length) {
    iEven++; // get index of leftmost odd to swap
  }
  while (A[iOdd] % 2 !== 0 && iOdd >= 0) {
    iOdd--; // get index of rightmost even to swap
  }
  while (iEven < iOdd) {
    [A[iEven], A[iOdd]] = [A[iOdd], A[iEven]];
    while (A[iEven] % 2 === 0 && iEven < A.length) {
      iEven++; // get index of next leftmost odd to swap
    }
    while (A[iOdd] % 2 !== 0 && iOdd >= 0) {
      iOdd--; // get index of next rightmost even to swap
    }
  }
  return A;
}

function sortArrayByParity_inPlaceButCleverer(A: number[]): number[] {
  // time O(n) space O(1)
  if (A.length < 2) return A;
  let iEven: number = 0;
  let iOdd: number = A.length - 1;
  while (iEven < iOdd) {
    // four cases: already correct, should swap, can increment even/odd

    // should swap:
    if (A[iEven] % 2 !== 0 && A[iOdd] % 2 === 0) {
      [A[iEven], A[iOdd]] = [A[iOdd], A[iEven]];
    }
    // can increment even:
    if (A[iEven] % 2 === 0) {
      iEven++;
    }
    // can increment odd:
    if (A[iOdd] % 2 !== 0) {
      iOdd--;
    }
  }
  return A;
}

function sortArrayByParity_smartSortCallback(A: number[]): number[] {
  // time O(n log n), space O(log n)
  if (A.length < 2) return A;
  return A.sort((num) => {
    // even ? go before : else after:
    return num % 2 === 0 ? -1 : +1;
  });
}

function isCorrect(arr: number[]): boolean {
  if (arr.length < 2) return true;
  let seenEven = false;
  let seenOdd = false;
  for (let i = 0; i < arr.length; i++) {
    const isEven = arr[i] % 2 === 0;
    if (seenOdd && isEven) return false;
    if (arr[i] % 2 === 0) {
      seenEven = true;
    } else {
      seenOdd = true;
    }
  }
  return true;
}

function testTheIsCorrectFunction(): void {
  let goodSoFar = true;
  goodSoFar = goodSoFar && isCorrect([2, 4, 6, 1, 3]);
  goodSoFar = goodSoFar && isCorrect([6, 2, 4, 3, 1]);
  goodSoFar = goodSoFar && isCorrect([2]);
  goodSoFar = goodSoFar && isCorrect([1]);
  goodSoFar = goodSoFar && isCorrect([1, 3]);
  goodSoFar = goodSoFar && isCorrect([2, 4]);
  goodSoFar = goodSoFar && isCorrect([2, 1, 4, 6, 3]) === false;
  goodSoFar = goodSoFar && isCorrect([2, 1]);
  goodSoFar = goodSoFar && isCorrect([1, 2]) === false;
  console.log(goodSoFar);
}
