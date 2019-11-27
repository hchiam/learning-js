/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./longestCommonSubSequence.js');
// const {add} = require('./index.js');

describe('index', () => {
  it('works', () => expect(solutionWrapper('', '')).toBe(''));
  it('works', () => expect(solutionWrapper('abba', 'abbad')).toBe('abba'));
  it('works', () => expect(solutionWrapper('abba', 'ababad')).toBe('abba'));
  it('works', () => expect(solutionWrapper('abba', 'abcbad')).toBe('abba'));
  it('works', () => expect(solutionWrapper('aaaa', 'aa')).toBe('aa'));
  it('works', () => expect(solutionWrapper('AGGTAB', 'GXTYAYB')).toBe('GTAB'));
});
