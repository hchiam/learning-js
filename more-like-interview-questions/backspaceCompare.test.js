/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./backspaceCompare.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper('ab#c', 'ad#c'))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper('ab##', 'c#d#'))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper('a##c', '#a#c'))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper('a#c', 'b'))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper('a', 'b'))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper('a', 'a'))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper('a', ''))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper('', 'b'))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper('a', '#'))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper('#', 'b'))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper('#', '#'))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper('y#fo##f', 'y#f#o##f'))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper('nzp#o#g', 'b#nzp#o#g'))
        .toStrictEqual(true);
  });
});
