const {
  fibonacci_recursive,
  fibonacci_memo,
  fibonacci_direct,
} = require("./fibonacci.js");

describe("recursive fibonacci solution", () => {
  it("works on trivial 1", () => {
    expect(fibonacci_recursive(1)).toBe(1);
  });
  it("works on trivial 2", () => {
    expect(fibonacci_recursive(2)).toBe(1);
  });
  it("works on 0 edge case", () => {
    expect(fibonacci_recursive(2)).toBe(1);
  });
  it("works on invalid negative numbers", () => {
    expect(fibonacci_recursive(-1)).toBe(0);
    expect(fibonacci_recursive(-2)).toBe(0);
  });
  it("works on bigger numbers", () => {
    expect(fibonacci_recursive(3)).toBe(2);
    expect(fibonacci_recursive(4)).toBe(3);
    expect(fibonacci_recursive(5)).toBe(5);
    expect(fibonacci_recursive(6)).toBe(8);
    expect(fibonacci_recursive(7)).toBe(13);
    expect(fibonacci_recursive(8)).toBe(21);
  });
});

describe("memo fibonacci solution", () => {
  it("works on trivial 1", () => {
    expect(fibonacci_memo(1)).toBe(1);
  });
  it("works on trivial 2", () => {
    expect(fibonacci_memo(2)).toBe(1);
  });
  it("works on 0 edge case", () => {
    expect(fibonacci_memo(2)).toBe(1);
  });
  it("works on invalid negative numbers", () => {
    expect(fibonacci_memo(-1)).toBe(0);
    expect(fibonacci_memo(-2)).toBe(0);
  });
  it("works on bigger numbers", () => {
    expect(fibonacci_memo(3)).toBe(2);
    expect(fibonacci_memo(4)).toBe(3);
    expect(fibonacci_memo(5)).toBe(5);
    expect(fibonacci_memo(6)).toBe(8);
    expect(fibonacci_memo(7)).toBe(13);
    expect(fibonacci_memo(8)).toBe(21);
  });
});

describe("direct fibonacci solution", () => {
  it("works on trivial 1", () => {
    expect(fibonacci_direct(1)).toBe(1);
  });
  it("works on trivial 2", () => {
    expect(fibonacci_direct(2)).toBe(1);
  });
  it("works on 0 edge case", () => {
    expect(fibonacci_direct(2)).toBe(1);
  });
  it("works on invalid negative numbers", () => {
    expect(fibonacci_direct(-1)).toBe(0);
    expect(fibonacci_direct(-2)).toBe(0);
  });
  it("works on bigger numbers", () => {
    expect(fibonacci_direct(3)).toBe(2);
    expect(fibonacci_direct(4)).toBe(3);
    expect(fibonacci_direct(5)).toBe(5);
    expect(fibonacci_direct(6)).toBe(8);
    expect(fibonacci_direct(7)).toBe(13);
    expect(fibonacci_direct(8)).toBe(21);
  });
});
