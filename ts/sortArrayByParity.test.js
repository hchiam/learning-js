/* eslint-disable require-jsdoc */

const s = require("./sortArrayByParity.js");

describe("the different solution methods", () => {
  const numbers = [1, 2, 3, 4, 6];
  test("work and all give valid answers", () => {
    expect(s.isCorrect(s.sortArrayByParity_2passes(numbers))).toEqual(true);

    expect(s.isCorrect(s.sortArrayByParity_inPlace(numbers))).toEqual(true);

    expect(
      s.isCorrect(s.sortArrayByParity_inPlaceButCleverer(numbers))
    ).toEqual(true);

    expect(s.isCorrect(s.sortArrayByParity_smartSortCallback(numbers))).toEqual(
      true
    );
  });
});

describe("the isCorrect function", () => {
  it("works", () => {
    expect(s.isCorrect([2, 4, 6, 1, 3])).toEqual(true);
    expect(s.isCorrect([6, 2, 4, 3, 1])).toEqual(true);
    expect(s.isCorrect([2])).toEqual(true);
    expect(s.isCorrect([1])).toEqual(true);
    expect(s.isCorrect([1, 3])).toEqual(true);
    expect(s.isCorrect([2, 4])).toEqual(true);
    expect(s.isCorrect([2, 1, 4, 6, 3])).toEqual(false);
    expect(s.isCorrect([2, 1])).toEqual(true);
    expect(s.isCorrect([1, 2])).toEqual(false);
  });
});
