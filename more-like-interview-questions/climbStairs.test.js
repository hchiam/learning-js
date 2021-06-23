const { climbStairs, climbStairs_direct } = require("./climbStairs");

describe("climbStairs", () => {
  it("works on invalid negative numbers", () => {
    expect(climbStairs(-1)).toBe(0);
    expect(climbStairs(-2)).toBe(0);
  });
  it("works on trivial cases", () => {
    expect(climbStairs(0)).toBe(1);
    expect(climbStairs(1)).toBe(1);
  });
  it("works on basic case of 2 steps", () => {
    expect(climbStairs(2)).toBe(2);
  });
  it("works on bigger stairs", () => {
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
  });
});

describe("climbStairs_direct", () => {
  it("works on invalid negative numbers", () => {
    expect(climbStairs_direct(-1)).toBe(0);
    expect(climbStairs_direct(-2)).toBe(0);
  });
  it("works on trivial cases", () => {
    expect(climbStairs_direct(0)).toBe(1);
    expect(climbStairs_direct(1)).toBe(1);
  });
  it("works on basic case of 2 steps", () => {
    expect(climbStairs_direct(2)).toBe(2);
  });
  it("works on bigger stairs", () => {
    expect(climbStairs_direct(3)).toBe(3);
    expect(climbStairs_direct(4)).toBe(5);
  });
});
