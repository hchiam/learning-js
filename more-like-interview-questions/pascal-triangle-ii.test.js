const { getRow } = require("./pascal-triangle-ii.js");

describe("test", () => {
  it("works", () => {
    expect(getRow(0)).toEqual([1]);
    expect(getRow(1)).toEqual([1, 1]);
    expect(getRow(2)).toEqual([1, 2, 1]);
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
    expect(getRow(4)).toEqual([1, 4, 6, 4, 1]);
  });
});
