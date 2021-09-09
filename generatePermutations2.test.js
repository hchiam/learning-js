const {
  getPermutations_buildArrayAsGo,
  getPermutations_swap_andOnlyBuildWhenReady,
} = require("./generatePermutations2.js");

describe("test alternative ways to generate permutations using generatePermutations2.js", () => {
  it("can recurse to build the permutation arrays as you go", () => {
    const actual = getPermutations_buildArrayAsGo([1, 2, 3]);
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    expect(actual).toStrictEqual(expected);
  });

  it("can recurse to swap items and swap to restore but only build permutation arrays when a permutation is done", () => {
    const actual = getPermutations_swap_andOnlyBuildWhenReady([1, 2, 3]);
    const expected = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2], // after [3, 2, 1] because of how it works
    ];
    expect(actual).toStrictEqual(expected);
  });
});
