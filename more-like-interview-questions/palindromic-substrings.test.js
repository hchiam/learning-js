const { countSubstrings } = require("./palindromic-substrings");

describe("palindromic-substrings.js countSubstrings", () => {
  it("works", () => {
    expect(countSubstrings("abc")).toBe(3);
    expect(countSubstrings("aaa")).toBe(6);
    expect(countSubstrings("aabacabaa")).toBe(17);
  });
});
