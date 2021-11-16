/**
 * Ot(n log b)
 */
function bucketSort(array, approximateBucketSize = 1) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  const range = Math.floor((max - min) / (approximateBucketSize || 1));
  const fencePostCount = range + 1;

  const buckets2DArray = Array.from({ length: fencePostCount }, () => []);
  array.forEach((item) => {
    // Ot(n)
    const bucketIndex = Math.floor((item - min) / (approximateBucketSize || 1));
    buckets2DArray[bucketIndex].push(item);
  });

  const output = [];
  buckets2DArray.forEach((bucket) => {
    // Ot(n)
    output.push(...bucket.sort((a, b) => a - b)); // Ot(b)
  });
  // console.log(buckets2DArray);
  return output;
}

module.exports = {
  bucketSort,
};
