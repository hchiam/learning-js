/* eslint-disable no-undef */

const {longestPalindrome} = require('./longestPalindrome3.js');
const answer = longestPalindrome;

describe('longestPalindrome', () => {
  it('handles null', () => {
    expect(answer(null)).toBe('');
  });
  it('handles empty string', () => {
    expect(answer('')).toBe('');
  });
  it('handles single character', () => {
    expect(answer('a')).toBe('a');
  });
  it('outputs first character when all are unique', () => {
    expect(answer('ab')).toBe('a');
    expect(answer('abc')).toBe('a');
    expect(answer('abcde')).toBe('a');
  });
  it('handles when all characters are the same', () => {
    expect(answer('aa')).toBe('aa');
    expect(answer('aaa')).toBe('aaa');
    expect(answer('aaaa')).toBe('aaaa');
    expect(answer('aaaaa')).toBe('aaaaa');
  });
  it('outputs the first of longest length if there are other of same max length', () => {
    expect(answer('babad')).toBe('bab');
  });
  it('can get palindrome from the center', () => {
    expect(answer('cbbd')).toBe('bb');
  });
  it('can get both even and odd palindromes from within', () => {
    expect(answer('abbc')).toBe('bb')
    expect(answer('abbbbc')).toBe('bbbb')
    expect(answer('abbbc')).toBe('bbb');
    expect(answer('abcbd')).toBe('bcb');
    expect(answer('abbcbbd')).toBe('bbcbb');
    expect(answer('acbcbcd')).toBe('cbcbc');
    expect(answer('aebcbed')).toBe('ebcbe');
  });
  it('handles longer cases', () => {
    expect(answer('abcdedcdcdedcxy')).toBe('cdedcdcdedc');
    expect(answer('aaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    expect(answer('aaaaaaaaaaaaaaaaaaaaaaaaaaab')).toBe('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    expect(answer('baaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
  });
});
