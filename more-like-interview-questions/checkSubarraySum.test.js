/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./checkSubarraySum.js');
// const {add} = require('./index.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(
      nums=[23, 2, 4, 6, 7], k=6
  )).toStrictEqual(true));

  it('works', () => expect(solutionWrapper(
      nums=[23, 2, 6, 4, 7], k=6
  )).toStrictEqual(true));

  it('works', () => expect(solutionWrapper(
      nums=[23, 3], k=6
  )).toStrictEqual(false));

  it('works', () => expect(solutionWrapper(
      nums=[], k=6
  )).toStrictEqual(false));

  it('works', () => expect(solutionWrapper(
      nums=[23], k=6
  )).toStrictEqual(false));

  it('works', () => expect(solutionWrapper(
      nums=[24], k=6
  )).toStrictEqual(false));

  it('works', () => expect(solutionWrapper(
      nums=[0, 0], k=6
  )).toStrictEqual(true));

  it('works', () => expect(solutionWrapper(
      nums=[0, 0], k=0
  )).toStrictEqual(true));

  it('works', () => expect(solutionWrapper(
      nums=[0, 0], k=-1
  )).toStrictEqual(true)); // n*k, where n is an integer, including 0

  it('works', () => expect(solutionWrapper(
      nums=[23, 2, 6, 4, 7], k=0
  )).toStrictEqual(false));

  it('works', () => expect(solutionWrapper(
      nums=[5, 0, 0], k=0
  )).toStrictEqual(true));
});
