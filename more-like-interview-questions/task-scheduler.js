// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/826/

// set up sums and formulas instead of actually creating the array:
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/826/discuss/104500/Java-O(n)-time-O(1)-space-1-pass-no-sorting-solution-with-detailed-explanation

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  if (!tasks && tasks?.length < 2) return tasks.length || 0;
  if (n === 0) return tasks.length;
  const ht = {};
  let sizeOf1MostFrequentTaskGroup = 0;
  let numberOfMostFrequentTaskGroups = 0;
  tasks?.forEach((t) => {
    if (ht[t] === undefined) {
      ht[t] = 1;
    } else {
      ht[t]++;
    }
    if (sizeOf1MostFrequentTaskGroup === ht[t]) {
      numberOfMostFrequentTaskGroups++;
    } else if (sizeOf1MostFrequentTaskGroup < ht[t]) {
      sizeOf1MostFrequentTaskGroup = ht[t];
      numberOfMostFrequentTaskGroups = 1;
    }
  });
  const numberOfSlotIntervalsInBetween = sizeOf1MostFrequentTaskGroup - 1;
  const numberOfOtherEquallyMostFrequentTaskGroups =
    numberOfMostFrequentTaskGroups - 1;
  const sizeOfSlotIntervalAfterUsingMostFrequents =
    n - numberOfOtherEquallyMostFrequentTaskGroups;
  const numberOfSlotsInBetweenToFill =
    numberOfSlotIntervalsInBetween * sizeOfSlotIntervalAfterUsingMostFrequents;

  const countOfAllTasks = tasks?.length;
  const sumOfMostFrequentTasks =
    numberOfMostFrequentTaskGroups * sizeOf1MostFrequentTaskGroup;
  const numberOfTasksStillToGoIntoSlots =
    countOfAllTasks - sumOfMostFrequentTasks; // not most common

  // max(0, number of slots)
  const numberOfSlotsLeftInBetweenAfterFilling = Math.max(
    0,
    numberOfSlotsInBetweenToFill - numberOfTasksStillToGoIntoSlots
  );

  const finalLength = countOfAllTasks + numberOfSlotsLeftInBetweenAfterFilling;

  return finalLength;
};

module.exports = {
  leastInterval,
};
