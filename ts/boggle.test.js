/* eslint-disable require-jsdoc */

const { exist } = require("./boggle.js");

describe("the solution", () => {
  it("works", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "ABCCED")).toEqual(true);
  });

  it("works", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "B")).toEqual(true);
  });

  it("works", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "SEE")).toEqual(true);
  });

  it("works", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "ABCB")).toEqual(false);
  });

  it("works", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "X")).toEqual(false);
  });

  it("works", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "CCC")).toEqual(false);
  });
});
