// JS array .flat() and .flatMap()

const flattenedArray = [1, 2, [3], [4, 5, 6, 7]].flat();
// [1, 2, 3, 4, 5, 6, 7];
const notFullyFlattened = [1, 2, [3], [4, 5, [6], 7]].flat();
// [1, 2, 3, 4, 5, [6], 7]; // only goes one level deep

const arr = ["this wants to be one", "", "array of words"];

const uh_arraysInArrays = arr.map((x) => x.split(" "));
// [["this", "wants", "to", "be", "one"], [""], ["array", "of", "words"]];
const flatArrayOfWords = arr.flatMap((x) => x.split(" "));
// ["this", "wants", "to", "be", "one", "", "array", "of", "words"];
// goes one level deep

console.log(flattenedArray);
console.log(notFullyFlattened);
console.log(uh_arraysInArrays);
console.log(flatArrayOfWords);
