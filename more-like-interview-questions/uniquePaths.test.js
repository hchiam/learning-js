/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./uniquePaths.js');
// const {add} = require('./index.js');

describe('index', () => {
  it('works', () => expect(solutionWrapper(3, 2)).toBe(3));
  it('works', () => expect(solutionWrapper(7, 3)).toBe(28));
  it('works', () => expect(solutionWrapper(1, 1)).toBe(1));
  it('works', () => expect(solutionWrapper(2, 1)).toBe(1));
  it('works', () => expect(solutionWrapper(1, 2)).toBe(1));
  it('works', () => expect(solutionWrapper(2, 2)).toBe(2));
  it('works', () => expect(solutionWrapper(0, 0)).toBe(1));
});
