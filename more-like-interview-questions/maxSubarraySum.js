// https://leetcode.com/problems/maximum-subarray/
// note: subarray is contiguous, subsequence is in order but not necessarily contiguous

/**
 * @param {number[]} nums
 * @return {number}
 */
// if positive number then:
// continue sequence if running sum is >0
// or start new sequence
//
// if negative number then:
//   if running sum + number > 0 then continue adding to running sum
//   if running sum + number <=0 then don't bother adding to running sum
// also track a global max sum and bump it up per local running sum
var maxSubArray = function (nums) {
  let globalMaxSum = nums[0];
  let maxSumI = 0;
  let maxSumJ = 0;

  let localSum = globalMaxSum;
  let localSumI = 0;
  let localSumJ = 0;

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n >= 0) {
      // positive number (or 0)
      if (localSum > 0) {
        localSum += n;
        localSumJ = i;
      } else {
        // if localSum <= 0:
        localSum = n;
        localSumI = i;
        localSumJ = i;
      }
    } else {
      // negative number
      if (localSum + n > 0) {
        localSum += n;
        localSumJ = i;
        // console.log([globalMaxSum, maxSumI, maxSumJ])
      } else {
        // if localSum + n <= 0:
        localSum = n; // just set to current number, in case e.g. [-2,-1]
        localSumI = i;
        localSumJ = i;
      }
    }
    [globalMaxSum, maxSumI, maxSumJ] = updateGlobalMaxSum(
      globalMaxSum,
      maxSumI,
      maxSumJ,
      localSum,
      localSumI,
      localSumJ
    );
    // console.log([globalMaxSum, maxSumI, maxSumJ])
  }

  // return nums.slice(maxSumI,maxSumJ+1);
  return globalMaxSum;
};

function updateGlobalMaxSum(
  globalMaxSum,
  maxSumI,
  maxSumJ,
  localSum,
  localSumI,
  localSumJ
) {
  if (localSum >= globalMaxSum) {
    return [localSum, localSumI, localSumJ];
  } else {
    return [globalMaxSum, maxSumI, maxSumJ];
  }
}

module.exports = {
  maxSubArray,
};
