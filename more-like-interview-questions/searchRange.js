/* eslint-disable require-jsdoc */

// first and last indices of element in sorted array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  // use binary search twice
  const left = getLeft(nums, target);
  const right = getRight(nums, target);
  return [left, right];
  function getLeft(nums, target) {
    let i = 0;
    let j = nums.length-1;
    let m = Math.floor((i + j)/2);
    while (i <= j) {
      if (nums[m] === target) {
        const hitEdge = (m === 0);
        const nextToTarget = (m-1 >= 0 && nums[m-1] !== target);
        if (hitEdge || nextToTarget) {
          return m;
        }
        j = m-1;
        m = Math.floor((i + j)/2);
      } else if (nums[m] < target) {
        i = m+1;
        m = Math.floor((i + j)/2);
      } else if (nums[m] > target) {
        j = m-1;
        m = Math.floor((i + j)/2);
      }
    }
    return -1;
  }
  function getRight(nums, target) {
    let i = 0;
    let j = nums.length-1;
    let m = Math.floor((i + j)/2);
    while (i <= j) {
      if (nums[m] === target) {
        const hitEdge = (m === nums.length-1);
        const nextToTarget = (m+1 < nums.length && nums[m+1] !== target);
        if (hitEdge || nextToTarget) {
          return m;
        }
        i = m+1;
        m = Math.floor((i + j)/2);
      } else if (nums[m] < target) {
        i = m+1;
        m = Math.floor((i + j)/2);
      } else if (nums[m] > target) {
        j = m-1;
        m = Math.floor((i + j)/2);
      }
    }
    if (m === 0 && nums[m] === target) return 0;
    return -1;
  }
};

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const searchRange_withLinearScan = (nums, target) => {
//   // use binary search twice (but linear scan once find target)
//   const left = getLeft(nums, target);
//   const right = getRight(nums, target);
//   return [left, right];
//   function getLeft(nums, target) {
//     let i = 0;
//     let j = nums.length-1;
//     let m = Math.floor((i + j)/2);
//     let foundTarget = false;
//     while (i <= j) {
//       if (nums[m] === target) {
//         foundTarget = true;
//         break;
//       } else if (nums[m] < target) {
//         i = m+1;
//         m = Math.floor((i + j)/2);
//       } else if (nums[m] > target) {
//         j = m-1;
//         m = Math.floor((i + j)/2);
//       }
//     }
//     if (!foundTarget) return -1;
//     while (m >= 0) {
//       m--;
//       if (nums[m] !== target) {
//         return m + 1;
//       }
//     }
//     return -1;
//   }
//   function getRight(nums, target) {
//     let i = 0;
//     let j = nums.length-1;
//     let m = Math.floor((i + j)/2);
//     let foundTarget = false;
//     while (i <= j) {
//       if (nums[m] === target) {
//         foundTarget = true;
//         break;
//       } else if (nums[m] < target) {
//         i = m+1;
//         m = Math.floor((i + j)/2);
//       } else if (nums[m] > target) {
//         j = m-1;
//         m = Math.floor((i + j)/2);
//       }
//     }
//     if (!foundTarget) return -1;
//     while (m < nums.length) {
//       m++;
//       if (nums[m] !== target) {
//         return m - 1;
//       }
//     }
//     return -1;
//   }
// };

function solutionWrapper(...parameters) {
  return searchRange(...parameters);
}

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
