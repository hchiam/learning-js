const {
  ListNode,
  mergeKLists,
  generateLLFromArray,
} = require("./merge-k-sorted-lists");

const { mergeKLists_alt } = require("./merge-k-sorted-lists_alt");

describe("merge K sorted lists", () => {
  it("generateLLFromArray works", () => {
    const actual = generateLLFromArray([1]);
    const expected = new ListNode(1);
    expect(actual).toEqual(expected);
  });

  it("works on lists with different lengths [[1,4,5],[1,3,4],[2,6]]", () => {
    const listOfLLs = [
      generateLLFromArray([1, 4, 5]),
      generateLLFromArray([1, 3, 4]),
      generateLLFromArray([2, 6]),
    ];
    const actual = mergeKLists(listOfLLs);
    const expected = generateLLFromArray([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(actual).toEqual(expected);
  });

  it("works on empty list of lists", () => {
    const listOfLLs = [];
    const actual = mergeKLists(listOfLLs);
    const expected = generateLLFromArray([]);
    expect(actual).toEqual(expected);
  });

  it("works on list of empty list", () => {
    const listOfLLs = [generateLLFromArray([])];
    const actual = mergeKLists(listOfLLs);
    const expected = generateLLFromArray([]);
    expect(actual).toEqual(expected);
  });

  it("works on a set of lists where one list is already empty", () => {
    const listOfLLs = [
      generateLLFromArray([1, 2, 3]),
      generateLLFromArray([]),
      generateLLFromArray([4, 5]),
    ];
    const actual = mergeKLists(listOfLLs);
    const expected = generateLLFromArray([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});

describe("merge K sorted lists ALTERNATE", () => {
  it("works on lists with different lengths [[1,4,5],[1,3,4],[2,6]]", () => {
    const listOfLLs = [
      generateLLFromArray([1, 4, 5]),
      generateLLFromArray([1, 3, 4]),
      generateLLFromArray([2, 6]),
    ];
    const actual = mergeKLists_alt(listOfLLs);
    const expected = generateLLFromArray([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(actual).toEqual(expected);
  });

  it("works on empty list of lists", () => {
    const listOfLLs = [];
    const actual = mergeKLists_alt(listOfLLs);
    const expected = generateLLFromArray([]);
    expect(actual).toEqual(expected);
  });

  it("works on list of empty list", () => {
    const listOfLLs = [generateLLFromArray([])];
    const actual = mergeKLists_alt(listOfLLs);
    const expected = generateLLFromArray([]);
    expect(actual).toEqual(expected);
  });

  it("works on a set of lists where one list is already empty", () => {
    const listOfLLs = [
      generateLLFromArray([1, 2, 3]),
      generateLLFromArray([]),
      generateLLFromArray([4, 5]),
    ];
    const actual = mergeKLists_alt(listOfLLs);
    const expected = generateLLFromArray([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});
