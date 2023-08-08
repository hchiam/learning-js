const { idea1, idea2 } = require("./jump-game.js");

describe("Ot(n^2) Os(n) solution to the jump-game canJump problem", () => {
  it("works", () => {
    expect(idea1([2, 3, 1, 1, 4])).toBe(true);
    expect(idea1([3, 2, 1, 0, 4])).toBe(false);
    expect(idea1([1])).toBe(true);
    expect(idea1([0])).toBe(true);
  });
});

describe("Ot(n) Os(1) solution to the jump-game canJump problem", () => {
  it("works", () => {
    expect(idea2([2, 3, 1, 1, 4])).toBe(true);
    expect(idea2([3, 2, 1, 0, 4])).toBe(false);
    expect(idea2([1])).toBe(true);
    expect(idea2([0])).toBe(true);
  });
});
