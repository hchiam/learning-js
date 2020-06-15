/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    // n is the length because if a number is missing, the max is the length,
    // and if there is not in-between number missing, then the max is the number missing
    const allSum = (n * (n + 1)) / 2; // think of the story of Gauss summing a 100 sequence
    const missingSum = nums.reduce((sum,curr)=> sum+curr, 0);
    return allSum - missingSum;
};

// https://leetcode.com/articles/missing-number

console.log(missingNumber([0]) === 1);
console.log(missingNumber([1]) === 0);
console.log(missingNumber([0,1]) === 2);
console.log(missingNumber([0,2]) === 1);
console.log(missingNumber([3,0,1]) === 2);
