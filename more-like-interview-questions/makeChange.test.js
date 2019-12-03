/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./makeChange.js');
// const {add} = require('./index.js');

describe('the solution', () => {
  it('0 to 4 -> 1', () => {
    for (const n of [0, 1, 2, 3, 4]) {
      expect(solutionWrapper(n)).toStrictEqual(1);
    }
  });
  it('5 to 9 -> 2', () => {
    for (const n of [5, 6, 7, 8, 9]) {
      expect(solutionWrapper(n)).toStrictEqual(2);
    }
  });
  it('10 to 14 -> 4', () => {
    for (let n = 10; n < 15; n++) {
      expect(solutionWrapper(n)).toStrictEqual(4);
    }
  });
  it('15 to 19 -> 5', () => {
    for (let n = 15; n < 20; n++) {
      expect(solutionWrapper(n)).toStrictEqual(6);
    }
  });
  it('20 to 24 -> 9', () => {
    for (let n = 20; n < 25; n++) {
      expect(solutionWrapper(n)).toStrictEqual(9);
    }
  });
});

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
