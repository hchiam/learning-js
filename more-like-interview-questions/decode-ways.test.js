const { recursion, dpTable } = require("./decode-ways.js");

describe("recursion solution to the decode-ways problem", () => {
  it("works", () => {
    expect(recursion("12")).toBe(2);
    expect(recursion("226")).toBe(3);
    expect(recursion("06")).toBe(0);
    expect(recursion("1111")).toBe(5);
    expect(recursion("2261")).toBe(3);
    expect(recursion("2101")).toBe(1);
    expect(recursion("301")).toBe(0);
    expect(recursion("27")).toBe(1);
    expect(recursion("10")).toBe(1);
    expect(recursion("01")).toBe(0);
  });
});

describe("dpTable solution to the decode-ways problem", () => {
  it("works", () => {
    expect(dpTable("12")).toBe(2);
    expect(dpTable("226")).toBe(3);
    expect(dpTable("06")).toBe(0);
    expect(dpTable("1111")).toBe(5);
    expect(dpTable("2261")).toBe(3);
    expect(dpTable("2101")).toBe(1);
    expect(dpTable("301")).toBe(0);
    expect(dpTable("27")).toBe(1);
    expect(dpTable("10")).toBe(1);
    expect(dpTable("01")).toBe(0);
  });
});
