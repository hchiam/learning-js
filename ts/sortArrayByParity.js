"use strict";
exports.__esModule = true;
// uncomment this next line and run node sortArrayByParity.js:
// manualTest();
function manualTest() {
    var numbers = [1, 2, 3, 4, 6];
    testTheIsCorrectFunction();
    console.log(isCorrect(sortArrayByParity_2passes(numbers)));
    console.log(isCorrect(sortArrayByParity_inPlace(numbers)));
    console.log(isCorrect(sortArrayByParity_inPlaceButCleverer(numbers)));
    console.log(isCorrect(sortArrayByParity_smartSortCallback(numbers)));
}
function sortArrayByParity_2passes(A) {
    // time O(n), space O(n)
    var iEven = 0;
    var iOdd = 0;
    var output = new Array(A.length).fill(-1);
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            iOdd++;
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            output[iEven] = A[i];
            iEven++;
        }
        else {
            output[iOdd] = A[i];
            iOdd++;
        }
    }
    return output;
}
exports.sortArrayByParity_2passes = sortArrayByParity_2passes;
function sortArrayByParity_inPlace(A) {
    var _a;
    // time O(n), space O(1)
    if (A.length < 2)
        return A;
    var iEven = 0;
    var iOdd = A.length - 1;
    while (A[iEven] % 2 === 0 && iEven < A.length) {
        iEven++; // get index of leftmost odd to swap
    }
    while (A[iOdd] % 2 !== 0 && iOdd >= 0) {
        iOdd--; // get index of rightmost even to swap
    }
    while (iEven < iOdd) {
        _a = [A[iOdd], A[iEven]], A[iEven] = _a[0], A[iOdd] = _a[1];
        while (A[iEven] % 2 === 0 && iEven < A.length) {
            iEven++; // get index of next leftmost odd to swap
        }
        while (A[iOdd] % 2 !== 0 && iOdd >= 0) {
            iOdd--; // get index of next rightmost even to swap
        }
    }
    return A;
}
exports.sortArrayByParity_inPlace = sortArrayByParity_inPlace;
function sortArrayByParity_inPlaceButCleverer(A) {
    var _a;
    // time O(n) space O(1)
    if (A.length < 2)
        return A;
    var iEven = 0;
    var iOdd = A.length - 1;
    while (iEven < iOdd) {
        // four cases: already correct, should swap, can increment even/odd
        // should swap:
        if (A[iEven] % 2 !== 0 && A[iOdd] % 2 === 0) {
            _a = [A[iOdd], A[iEven]], A[iEven] = _a[0], A[iOdd] = _a[1];
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
exports.sortArrayByParity_inPlaceButCleverer = sortArrayByParity_inPlaceButCleverer;
function sortArrayByParity_smartSortCallback(A) {
    // time O(n log n), space O(log n)
    if (A.length < 2)
        return A;
    return A.sort(function (num) {
        // even ? go before : else after:
        return num % 2 === 0 ? -1 : +1;
    });
}
exports.sortArrayByParity_smartSortCallback = sortArrayByParity_smartSortCallback;
function isCorrect(arr) {
    if (arr.length < 2)
        return true;
    var seenEven = false;
    var seenOdd = false;
    for (var i = 0; i < arr.length; i++) {
        var isEven = arr[i] % 2 === 0;
        if (seenOdd && isEven)
            return false;
        if (arr[i] % 2 === 0) {
            seenEven = true;
        }
        else {
            seenOdd = true;
        }
    }
    return true;
}
exports.isCorrect = isCorrect;
function testTheIsCorrectFunction() {
    var goodSoFar = true;
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
