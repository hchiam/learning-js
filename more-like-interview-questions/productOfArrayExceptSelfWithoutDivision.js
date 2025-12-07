/**
 * https://leetcode.com/problems/product-of-array-except-self/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 
BCR = time O(n) space O(1)
kudos to: https://leetcode.com/problems/product-of-array-except-self/discuss/1597994/C%2B%2BPython-4-Simple-Solutions-w-Explanation-or-Prefix-and-Suffix-product-O(1)-space-approach 
use a prefix and suffix (array or var), and multiply output by number before/after 
2 helper arrays: time O(3n) space O(3n) = time O(n) space O(n) > BCR
1 helper var + 2 loops: time O(2n) space O(1) = time O(n) space O(1) ~ BCR
2 helper vars + 1 loop: time O(n) space O(1) = BCR
*/
var productExceptSelf = function (nums) {
  const output = new Array(nums.length).fill(1);
  let prefixProduct = 1;
  let suffixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] *= prefixProduct;
    prefixProduct *= nums[i]; // not i-1, since i will be i-1 next
    output[nums.length - 1 - i] *= suffixProduct;
    suffixProduct *= nums[nums.length - 1 - i]; // no i-1, since i --> i-1 soon
  }
  return output;
};
/*
starting from:

i = 0
n = [1 2 3 4]
o = [1 1 1 1]
p = 1
s = 1

you get:

i =  0 1 2 3
n = [1 2 3 4]
o = [24 12 8 6]
p = (1)*1*2*3*(4) = 6*(4) = 24
s = (1)*4*3*2*(1) = 24*(1) = 24

o = [1*1*24 1*1*12 1*4*2 1*1*6]
-> *1     *1     *1*2  *1*2*3
   *4*3*2 *4*3   *4    *1   <-
*/

module.exports = {
  productExceptSelf,
};
