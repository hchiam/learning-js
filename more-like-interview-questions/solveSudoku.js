function exampleUsage() {
  let answer = solveSudoku([
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7],
  ]);
  printBoard(answer);
  console.log(isBoardOK(answer) ? "OK\n" : ":(\n");

  answer = solveSudoku([
    [0, 0, 0, 0, 3, 0, 0, 0, 9],
    [0, 4, 0, 5, 0, 0, 0, 7, 8],
    [2, 9, 0, 0, 0, 1, 0, 5, 0],
    [0, 7, 8, 0, 0, 3, 0, 0, 6],
    [0, 3, 0, 0, 6, 0, 0, 8, 0],
    [6, 0, 0, 8, 0, 0, 9, 3, 0],
    [0, 6, 0, 9, 0, 0, 0, 2, 7],
    [7, 2, 0, 0, 0, 5, 0, 6, 0],
    [8, 0, 0, 0, 7, 0, 0, 0, 0],
  ]);
  printBoard(answer);
  console.log(isBoardOK(answer) ? "OK\n" : ":(\n");
}

function solveSudoku(board) {
  recurse(board, 0, 0);
  return board;
}

function recurse(board, i, j) {
  // printBoard(board, true)
  if (i >= 9 || j >= 9 || i < 0 || j < 0) return true;
  if (board[i][j] !== 0) {
    const [nextI, nextJ] = getNextCellCoordinates(i, j);
    return recurse(board, nextI, nextJ);
  }

  for (let guess = 1; guess <= 9; guess++) {
    if (isCellOK(guess, board, i, j)) {
      board[i][j] = guess;
      const [nextI, nextJ] = getNextCellCoordinates(i, j);
      if (recurse(board, nextI, nextJ)) {
        return true;
      }
    }
  }

  board[i][j] = 0;
  return false;
}

function getNextCellCoordinates(i, j) {
  // : number[]
  // read left to right, top to bottom:
  return j === 8 ? [i + 1, 0] : [i, j + 1];
}

function isCellOK(guess, board, r, c) {
  return (
    isValidRow(guess, board, r, c) &&
    isValidColumn(guess, board, r, c) &&
    isValidBlock(guess, board, r, c)
  );
}

function isValidRow(guess, board, r, c) {
  for (let i = 0; i < board.length; i++) {
    const isDifferentCell = i !== r;
    const hasSameValue = board[i][c] === guess;
    if (isDifferentCell && hasSameValue) {
      return false;
    }
  }
  return true;
}

function isValidColumn(guess, board, r, c) {
  for (let j = 0; j < board[0].length; j++) {
    const isDifferentCell = j !== c;
    const hasSameValue = board[r][j] === guess;
    if (isDifferentCell && hasSameValue) {
      return false;
    }
  }
  return true;
}

function isValidBlock(guess, board, r, c) {
  return !getBlockValues(board, r, c).includes(guess);
}

function getBlockValues(board, r, c) {
  // : number[]
  let rowID = Math.ceil((r + 1) / 3); // 1 or 2 or 3
  let colID = Math.ceil((c + 1) / 3); // 1 or 2 or 3
  const startRowIndex = (rowID - 1) * 3;
  const startColIndex = (colID - 1) * 3;
  const output = [];
  for (let i = startRowIndex; i < startRowIndex + 3; i++) {
    for (let j = startColIndex; j < startColIndex + 3; j++) {
      if (board[i][j] && (i !== r || j !== c)) {
        output.push(board[i][j]);
      }
    }
  }
  return output;
}

function isBoardOK(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isCellOK(board[i][j], board, i, j)) return false;
    }
  }
  return true;
}

function printBoard(board, short = false) {
  if (short) {
    console.log(JSON.stringify(board).replaceAll(",", ""));
  } else {
    console.log(
      JSON.stringify(board)
        .replace("[[", "[")
        .replace("]]", "]")
        .split("],[")
        .join("],\n[")
    );
    console.log();
  }
}

module.exports = {
  exampleUsage,
  solveSudoku,
  isBoardOK,
  printBoard,
};
