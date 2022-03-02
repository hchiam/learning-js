const {
  generatePairedDivTags,
  doesSolutionMatch,
} = require("./generatePairedDivTags.js");

describe("generatePairedDivTags", () => {
  it("works on 1", () => {
    const actual = generatePairedDivTags(1);
    const expected = ["<div></div>"];
    expect(doesSolutionMatch(actual, expected)).toBe(true);
  });
  it("works on 2", () => {
    const actual = generatePairedDivTags(2);
    const expected = ["<div></div><div></div>", "<div><div></div></div>"];
    expect(doesSolutionMatch(actual, expected)).toBe(true);
  });
  it("works on 3", () => {
    const actual = generatePairedDivTags(3);
    const expected = [
      "<div></div><div></div><div></div>",
      "<div><div></div></div><div></div>",
      "<div></div><div><div></div></div>",
      "<div><div></div><div></div></div>",
      "<div><div><div></div></div></div>",
    ];
    expect(doesSolutionMatch(actual, expected)).toBe(true);
  });
});
