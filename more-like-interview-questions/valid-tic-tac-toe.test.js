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
      oox <- x won multiple times by playing position (0,0)`, () => {
    const actual = isValidTicTacToeState([
      ["x", "x", "x"],
      ["o", "x", "o"],
      ["o", "o", "x"],
    ]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it(`xx 
      o  
         `, () => {
    const actual = isValidTicTacToeState([
      ["x", "x", ""],
      ["o", "", ""],
      ["", "", ""],
    ]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it(`x  
      o  
         `, () => {
    const actual = isValidTicTacToeState([
      ["x", "", ""],
      ["o", "", ""],
      ["", "", ""],
    ]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it(`   
      o  
         `, () => {
    const actual = isValidTicTacToeState([
      ["", "", ""],
      ["o", "", ""],
      ["", "", ""],
    ]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it(`x x
      ooo
       x  <- this would fail if o went first, because x can't keep playing`, () => {
    const actual = isValidTicTacToeState([
      ["x", "", "x"],
      ["o", "o", "o"],
      ["", "x", ""],
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
  it(`xxx
      o  
         `, () => {
    const actual = isValidTicTacToeState([
      ["x", "x", "x"],
      ["o", "", ""],
      ["", "", ""],
    ]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it(`xxx
      ooo
         `, () => {
    const actual = isValidTicTacToeState([
      ["x", "x", "x"],
      ["o", "o", "o"],
      ["", "", ""],
    ]);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
