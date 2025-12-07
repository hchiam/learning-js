/**
 * time O(n b log b)? but apparently can be time O(n)
 *
 * But apparently it's more like time O(n log n) worst case
 * and time O(n + n^2 / b + b) on average,
 * or time O(n) on average when b ~ n. Or if insertion sort inside each bucket assuming small buckets (either by uniform distribution over buckets, or clever bucket ranges to maintain small density across buckets).
 * https://en.wikipedia.org/wiki/Bucket_sort
 * (Average case if uniform distribution.)
 */
function bucketSort(array, approximateBucketSize = 1) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  const range = Math.floor((max - min) / (approximateBucketSize || 1));
  const fencePostCount = range + 1;

  const buckets2DArray = Array.from({ length: fencePostCount }, () => []);

  // time O(n)
  array.forEach((item) => {
    const bucketIndex = Math.floor((item - min) / (approximateBucketSize || 1));
    buckets2DArray[bucketIndex].push(item);
  });

  const output = [];

  // time O(n)
  buckets2DArray.forEach((bucket) => {
    output.push(...bucket.sort((a, b) => a - b)); // time O(b log b)
  });

  // console.log(buckets2DArray);
  return output;
}

module.exports = {
  bucketSort,
};
