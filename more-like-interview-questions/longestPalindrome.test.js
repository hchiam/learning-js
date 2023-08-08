/* eslint-disable no-undef */

const { longestPalindrome } = require("./longestPalindrome3.js");
const { longestPalindrome4 } = require("./longestPalindrome4.js");

describe("longestPalindrome", () => {
  it("handles null", () => {
    expect(longestPalindrome(null)).toBe("");
  });
  it("handles empty string", () => {
    expect(longestPalindrome("")).toBe("");
  });
  it("handles single character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });
  it("outputs first character when all are unique", () => {
    expect(longestPalindrome("ab")).toBe("a");
    expect(longestPalindrome("abc")).toBe("a");
    expect(longestPalindrome("abcde")).toBe("a");
  });
  it("handles when all characters are the same", () => {
    expect(longestPalindrome("aa")).toBe("aa");
    expect(longestPalindrome("aaa")).toBe("aaa");
    expect(longestPalindrome("aaaa")).toBe("aaaa");
    expect(longestPalindrome("aaaaa")).toBe("aaaaa");
  });
  it("outputs the first of longest length if there are other of same max length", () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });
  it("can get palindrome from the center", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
    expect(longestPalindrome("bananas")).toBe("anana");
  });
  it("can get both even and odd palindromes from within", () => {
    expect(longestPalindrome("abbc")).toBe("bb");
    expect(longestPalindrome("abbbbc")).toBe("bbbb");
    expect(longestPalindrome("abbbc")).toBe("bbb");
    expect(longestPalindrome("abcbd")).toBe("bcb");
    expect(longestPalindrome("abbcbbd")).toBe("bbcbb");
    expect(longestPalindrome("acbcbcd")).toBe("cbcbc");
    expect(longestPalindrome("aebcbed")).toBe("ebcbe");
  });
  it("handles longer cases", () => {
    expect(longestPalindrome("ababababababa")).toBe("ababababababa");
    expect(longestPalindrome("abcdedcdcdedcxy")).toBe("cdedcdcdedc");
    expect(longestPalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    expect(longestPalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaab")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    expect(longestPalindrome("baaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
  });
});

describe("longestPalindrome4", () => {
  it("handles null", () => {
    expect(longestPalindrome4(null)).toBe("");
  });
  it("handles empty string", () => {
    expect(longestPalindrome4("")).toBe("");
  });
  it("handles single character", () => {
    expect(longestPalindrome4("a")).toBe("a");
  });
  it("outputs first character when all are unique", () => {
    expect(longestPalindrome4("ab")).toBe("a");
    expect(longestPalindrome4("abc")).toBe("a");
    expect(longestPalindrome4("abcde")).toBe("a");
  });
  it("handles when all characters are the same", () => {
    expect(longestPalindrome4("aa")).toBe("aa");
    expect(longestPalindrome4("aaa")).toBe("aaa");
    expect(longestPalindrome4("aaaa")).toBe("aaaa");
    expect(longestPalindrome4("aaaaa")).toBe("aaaaa");
  });
  it("outputs the first of longest length if there are other of same max length", () => {
    expect(longestPalindrome4("babad")).toBe("bab");
  });
  it("can get palindrome from the center", () => {
    expect(longestPalindrome4("cbbd")).toBe("bb");
    expect(longestPalindrome4("bananas")).toBe("anana");
  });
  it("can get both even and odd palindromes from within", () => {
    expect(longestPalindrome4("abbc")).toBe("bb");
    expect(longestPalindrome4("abbbbc")).toBe("bbbb");
    expect(longestPalindrome4("abbbc")).toBe("bbb");
    expect(longestPalindrome4("abcbd")).toBe("bcb");
    expect(longestPalindrome4("abbcbbd")).toBe("bbcbb");
    expect(longestPalindrome4("acbcbcd")).toBe("cbcbc");
    expect(longestPalindrome4("aebcbed")).toBe("ebcbe");
  });
  it("handles longer cases", () => {
    expect(longestPalindrome4("ababababababa")).toBe("ababababababa");
    expect(longestPalindrome4("abcdedcdcdedcxy")).toBe("cdedcdcdedc");
    expect(longestPalindrome4("aaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    expect(longestPalindrome4("aaaaaaaaaaaaaaaaaaaaaaaaaaab")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
    expect(longestPalindrome4("baaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
    );
  });
});
