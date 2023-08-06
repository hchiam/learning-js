const { rob1, rob2 } = require("./houseRobber.js");

describe("Ot(n) Os(n) solution to the House Robber problem", () => {
  it("works", () => {
    expect(rob1([1, 2, 3, 1])).toBe(4);
    expect(rob1([2, 7, 9, 3, 1])).toBe(12);
    expect(rob1([4, 1, 1, 4])).toBe(8);
    expect(rob1([1])).toBe(1);
    expect(rob1([1, 2])).toBe(2);
    expect(rob1([1, 2, 3])).toBe(4);
  });
});

describe("Ot(n) Os(1) solution to the House Robber problem", () => {
  it("works", () => {
    expect(rob2([1, 2, 3, 1])).toBe(4);
    expect(rob2([2, 7, 9, 3, 1])).toBe(12);
    expect(rob2([4, 1, 1, 4])).toBe(8);
    expect(rob2([1])).toBe(1);
    expect(rob2([1, 2])).toBe(2);
    expect(rob2([1, 2, 3])).toBe(4);
  });
});
