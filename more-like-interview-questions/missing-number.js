/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_Gauss = function(nums) {
    const n = nums.length;
    // n is the length because if a number is missing, the max is the length,
    // and if there is not in-between number missing, then the max is the number missing
    const allSum = (n * (n + 1)) / 2; // think of the story of Gauss summing a 100 sequence
    const missingSum = nums.reduce((sum,curr)=> sum+curr, 0);
    return allSum - missingSum;
};

var missingNumber_xor_is_its_own_inverse = function(nums) {
	let output = nums.length; // (because if number missing, use length; but if number missing is not in-between, max === length anyways)
    for (let i = 0; i < nums.length; i++) {
        output ^= i ^ nums[i]; // all sum vs missing sum
    }
	return output;
};

var missingNumber = missingNumber_xor_is_its_own_inverse;

// https://leetcode.com/articles/missing-number

console.log(missingNumber([0]) === 1);
console.log(missingNumber([1]) === 0);
console.log(missingNumber([0,1]) === 2);
console.log(missingNumber([0,2]) === 1);
console.log(missingNumber([3,0,1]) === 2);
