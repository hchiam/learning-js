/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./new21Game.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper(N=10, K=1, W=10))
        .toStrictEqual(1.00000);
  });
  it('works', () => {
    expect(solutionWrapper(N=6, K=1, W=10))
        .toStrictEqual(0.60000);
  });
  it('works', () => {
    expect(solutionWrapper(N=21, K=17, W=10))
        .toStrictEqual(0.73278);
  });
});
