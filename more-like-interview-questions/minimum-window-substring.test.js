const { minWindow } = require("./minimum-window-substring.js");

describe("minimum-window-substring minWindow", () => {
  it("works", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    expect(minWindow("a", "a")).toBe("a");
    expect(minWindow("a", "aa")).toBe("");
    expect(minWindow("abc", "acb")).toBe("abc");
    expect(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd")).toBe("abbbbbcdd");
  });
});
