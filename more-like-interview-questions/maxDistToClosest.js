/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/maximize-distance-to-closest-person/
/**
 * [1,0,0,0,1,0,1] -> 2 because 2 seats away is max distance
 */

// seems simple but has tricky cases to think of

/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = (seats) => {
  // assumes array has at least a 1 and a 0
  if (seats.length === 2) return 1;
  let maxWidth = 0; // to output
  // get widths of 0s while accounting for "edges"
  let lengthOf0s = 0;
  let indexOfLeft1 = null;
  for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    if (seat === 0) {
      lengthOf0s++;
      if (indexOfLeft1 === null) {
        maxWidth = Math.max(maxWidth, lengthOf0s);
      }
    } else if (seat === 1) {
      if (indexOfLeft1 === null) {
        maxWidth = Math.max(maxWidth, lengthOf0s); // sit at index 0
      } else {
        const halfwayBetween = Math.floor((lengthOf0s + 1)/2);
        maxWidth = Math.max(maxWidth, halfwayBetween);
      }
      indexOfLeft1 = i;
      lengthOf0s = 0; // reset count
    }
  }
  // check end of seats array
  if (seats[seats.length - 1] === 0) {
    maxWidth = Math.max(maxWidth, lengthOf0s);
  }
  return maxWidth;
};

/**
 * alternative solution that seems to be slightly faster on leetcode,
 * but the code is longer
 */
// const maxDistToClosest = (seats) => {
//   // assumes array has at least a 1 and a 0
//   if (seats.length === 2) return 1;
//   let maxWidth = 0; // to output
//   let ones = 0;
//   let indexFirstOne = null;
//   for (let i = 0; i < seats.length; i++) {
//     const seat = seats[i];
//     if (ones === 0) indexFirstOne = i;
//     if (seat === 1) ones++;
//   }
//   // check special case if only one 1
//   if (ones === 1) {
//     return Math.max(indexFirstOne, seats.length-1 - indexFirstOne);
//   } else {
//     // check left end that "goes off into 0"
//     if (seats[0] === 0) {
//       maxWidth = Math.max(maxWidth, indexFirstOne);
//     }
//     let indexLastOne = null;
//     for (let i = seats.length-1; i >= 0; i--) {
//       const seat = seats[i];
//       if (seat === 1) {
//         indexLastOne = i;
//         break;
//       }
//     }
//     // check right end that "goes off into 0"
//     if (seats[seats.length-1] === 0) {
//       maxWidth = Math.max(maxWidth, seats.length-1 - indexLastOne);
//     }
//   }
//   // check cases where you have to go halfway between 2 people
//   let previousIndex = indexFirstOne;
//   for (let i = indexFirstOne; i < seats.length; i++) {
//     const seat = seats[i];
//     if (seat === 1) {
//       maxWidth = Math.max(maxWidth, Math.floor((i - previousIndex)/2));
//       previousIndex = i;
//     }
//   }
//   return maxWidth;
// };

function solutionWrapper(...parameters) {
  return maxDistToClosest(...parameters);
}

module.exports = {
  solutionWrapper,
};
