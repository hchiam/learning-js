/**
 * Ot(n b log b)
 *
 * But apparently it's more like Ot(n log n) worst case
 * and Ot(n + n^2 / b + b) on average,
 * or Ot(n) on average when b ~ n.
 * https://en.wikipedia.org/wiki/Bucket_sort
 * (Average case if uniform distribution.)
 */
function bucketSort(array, approximateBucketSize = 1) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  const range = Math.floor((max - min) / (approximateBucketSize || 1));
  const fencePostCount = range + 1;

  const buckets2DArray = Array.from({ length: fencePostCount }, () => []);

  // Ot(n)
  array.forEach((item) => {
    const bucketIndex = Math.floor((item - min) / (approximateBucketSize || 1));
    buckets2DArray[bucketIndex].push(item);
  });

  const output = [];

  // Ot(n)
  buckets2DArray.forEach((bucket) => {
    output.push(...bucket.sort((a, b) => a - b)); // Ot(b log b)
  });

  // console.log(buckets2DArray);
  return output;
}

module.exports = {
  bucketSort,
};
