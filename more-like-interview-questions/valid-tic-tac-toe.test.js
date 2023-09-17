const { isValidTicTacToeState } = require("./valid-tic-tac-toe");

describe("valid tic tac toe grids", () => {
  it(`xox
      oxo
      oxo`, () => {
    const actual = isValidTicTacToeState([
      ["x", "o", "x"],
      ["o", "x", "o"],
      ["o", "x", "o"],
    ]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it(`xxx
      oxo
      oox`, () => {
    const actual = isValidTicTacToeState([
      ["x", "x", "x"],
      ["o", "x", "o"],
      ["o", "o", "x"],
    ]);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("invalid tic tac toe grids", () => {
  it(`xxx
      x  
      x  `, () => {
    const actual = isValidTicTacToeState([
      ["x", "x", "x"],
      ["x", "", ""],
      ["x", "", ""],
    ]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it(`ooo
      ooo
      x  `, () => {
    const actual = isValidTicTacToeState([
      ["o", "o", "o"],
      ["o", "o", "o"],
      ["x", "", ""],
    ]);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
