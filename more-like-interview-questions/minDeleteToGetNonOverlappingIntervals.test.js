const {
  eraseOverlapIntervals,
} = require("./minDeleteToGetNonOverlappingIntervals.js");

describe("minDeleteToGetNonOverlappingIntervals", () => {
  it("eraseOverlapIntervals on single interval", () => {
    const actual = eraseOverlapIntervals([[1, 2]]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it("eraseOverlapIntervals on no intervals", () => {
    const actual = eraseOverlapIntervals([]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it("eraseOverlapIntervals on non-overlapping intervals", () => {
    const actual = eraseOverlapIntervals([
      [1, 2],
      [2, 3],
    ]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it("eraseOverlapIntervals on 'side-overlapping' intervals", () => {
    const actual = eraseOverlapIntervals([
      [1, 3],
      [2, 4],
    ]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it("eraseOverlapIntervals on 2 'enclosed-overlapping' intervals", () => {
    const actual = eraseOverlapIntervals([
      [1, 4],
      [2, 3],
    ]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it("eraseOverlapIntervals on 3 'enclosed-overlapping' intervals", () => {
    const actual = eraseOverlapIntervals([
      [1, 4],
      [2, 3],
      [3, 4],
    ]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it("eraseOverlapIntervals on 3 'enclosed-overlapping' intervals - out of order", () => {
    const actual = eraseOverlapIntervals([
      [3, 4],
      [1, 4],
      [2, 3],
    ]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
