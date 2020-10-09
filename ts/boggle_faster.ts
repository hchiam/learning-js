// tsc boggle.ts --lib es6,dom && node boggle.js

export function exist(board: string[][], word: string): boolean {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0]) {
        const temp = board[r][c];
        board[r][c] = "visited";
        const data: Data = {
          board,
          wordRemainder: word.slice(1),
          position: {
            row: r,
            col: c,
          },
        };
        // console.log(word[0], board, r, c);
        const found = chain(data);
        if (found) return true;
        board[r][c] = temp;
      }
    }
  }
  return false;
}

function chain({
  board,
  position: { row, col },
  wordRemainder,
}: Data): boolean {
  // base case:
  if (wordRemainder === "" || wordRemainder.length === 0) return true;

  // check up:
  if (
    row - 1 >= 0 &&
    board[row - 1][col] !== "visited" &&
    wordRemainder[0] === board[row - 1][col]
  ) {
    const temp = board[row - 1][col];
    board[row - 1][col] = "visited";
    const newData: Data = {
      board,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row: row - 1,
        col,
      },
    };
    // console.log(wordRemainder[0], board, row - 1, col);
    const up = chain(newData);
    if (up) return true;
    board[row - 1][col] = temp;
  }

  // check down:
  if (
    row + 1 < board.length &&
    board[row + 1][col] !== "visited" &&
    wordRemainder[0] === board[row + 1][col]
  ) {
    const temp = board[row + 1][col];
    board[row + 1][col] = "visited";
    const newData: Data = {
      board,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row: row + 1,
        col,
      },
    };
    // console.log(wordRemainder[0], board, row + 1, col);
    const down = chain(newData);
    if (down) return true;
    board[row + 1][col] = temp;
  }

  // check left:
  if (
    col - 1 >= 0 &&
    board[row][col - 1] !== "visited" &&
    wordRemainder[0] === board[row][col - 1]
  ) {
    const temp = board[row][col - 1];
    board[row][col - 1] = "visited";
    const newData: Data = {
      board,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row,
        col: col - 1,
      },
    };
    // console.log(wordRemainder[0], board, row, col - 1);
    const left = chain(newData);
    if (left) return true;
    board[row][col - 1] = temp;
  }

  // check right:
  if (
    col + 1 < board[0].length &&
    board[row][col + 1] !== "visited" &&
    wordRemainder[0] === board[row][col + 1]
  ) {
    const temp = board[row][col + 1];
    board[row][col + 1] = "visited";
    const newData: Data = {
      board,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row,
        col: col + 1,
      },
    };
    // console.log(wordRemainder[0], board, row, col + 1);
    const right = chain(newData);
    if (right) return true;
    board[row][col + 1] = temp;
  }

  return false;
}

interface Data {
  board: string[][];
  position: DataPosition;
  wordRemainder: string;
}

interface DataPosition {
  row: number;
  col: number;
}
