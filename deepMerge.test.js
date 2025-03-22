const { deepMerge } = require("./deepMerge.js");

describe("deepMerge", () => {
  it("combines", () => {
    const actual = val(deepMerge({ a: 1 }, { b: 2 }));
    const expected = val({ a: 1, b: 2 });
    expect(actual).toBe(expected);
  });
  it("overwrites collisions", () => {
    const actual = val(deepMerge({ a: 1 }, { a: 2 }));
    const expected = val({ a: 2 });
    expect(actual).toBe(expected);
  });
  it("combines at 1 level down too without deleting", () => {
    const actual = val(
      deepMerge({ a: 1, b: { c: 2 } }, { a: 3, b: { d: 4 }, e: 5 })
    );
    const expected = val({ a: 3, b: { c: 2, d: 4 }, e: 5 });
    expect(actual).toBe(expected);
  });
  it("combines multiple levels down without deleting, and different data types", () => {
    const actual = val(
      deepMerge(
        { a: 1, b: { c: 2, third: { first: 1, second: 1 } } },
        {
          a: 3,
          b: { d: 4, third: { second: 2, third: 3, fourth: "4th" } },
          e: 5,
        }
      )
    );
    const expected = val({
      a: 3,
      b: {
        c: 2,
        third: { first: 1, second: 2, third: 3, fourth: "4th" },
        d: 4,
      },
      e: 5,
    });
    expect(actual).toBe(expected);
  });
});

function val(json) {
  return JSON.stringify(json);
}
