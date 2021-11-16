const { bucketSort } = require("./bucketSort.js");

describe("bucketSort", () => {
  it("works", () => {
    expect(bucketSort([3, 2, 1, 5, 4, 7, 6, 5])).toEqual([
      1, 2, 3, 4, 5, 5, 6, 7,
    ]);

    expect(bucketSort([-1, -3, -4, 2, 1, 3])).toEqual([-4, -3, -1, 1, 2, 3]);
    expect(bucketSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bucketSort([])).toEqual([]);
    expect(bucketSort([5, 4, 3, 2, -100])).toEqual([-100, 2, 3, 4, 5]);
    expect(bucketSort([1])).toEqual([1]);
  });

  it("works with fuzzy bucket size specified", () => {
    expect(bucketSort([3, 2, 1, 5, 4, 7, 6, 5], 3)).toEqual([
      1, 2, 3, 4, 5, 5, 6, 7,
    ]);

    expect(bucketSort([-1, -3, -4, 2, 1, 3], 2)).toEqual([-4, -3, -1, 1, 2, 3]);
    expect(bucketSort([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
    expect(bucketSort([], 5)).toEqual([]);
    expect(bucketSort([5, 4, 3, 2, -100], 5)).toEqual([-100, 2, 3, 4, 5]);
    expect(bucketSort([1], 1)).toEqual([1]);
  });
});
