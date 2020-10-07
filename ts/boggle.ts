// tsc boggle.ts --lib es6,dom && node boggle.js

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
console.log(exist(board, "ABCCED") === true);
console.log(exist(board, "B") === true);
console.log(exist(board, "SEE") === true);
console.log(exist(board, "ABCB") === false);
console.log(exist(board, "X") === false);
console.log(exist(board, "CCC") === false);

function exist(board: string[][], word: string): boolean {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === word[0]) {
        const visited: boolean[][] = new Array(board.length)
          .fill(null)
          .map(() => new Array(board[0].length).fill(false));
        visited[r][c] = true;
        const data: Data = {
          board,
          visited,
          wordRemainder: word.slice(1),
          position: {
            row: r,
            col: c,
          },
        };
        // console.log(word[0], visited, r, c);
        const found = chain(data);
        if (found) return true;
      }
    }
  }
  return false;
}

function chain({
  board,
  visited,
  position: { row, col },
  wordRemainder,
}: Data): boolean {
  // base case:
  if (wordRemainder === "" || wordRemainder.length === 0) return true;

  // check up:
  if (
    row - 1 >= 0 &&
    !visited[row - 1][col] &&
    wordRemainder[0] === board[row - 1][col]
  ) {
    const newVisited = JSON.parse(JSON.stringify(visited));
    newVisited[row - 1][col] = true;
    const newData: Data = {
      board,
      visited: newVisited,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row: row - 1,
        col,
      },
    };
    // console.log(wordRemainder[0], newVisited, row - 1, col);
    const up = chain(newData);
    if (up) return true;
  }

  // check down:
  if (
    row + 1 < board.length &&
    !visited[row + 1][col] &&
    wordRemainder[0] === board[row + 1][col]
  ) {
    const newVisited = JSON.parse(JSON.stringify(visited));
    newVisited[row + 1][col] = true;
    const newData: Data = {
      board,
      visited: newVisited,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row: row + 1,
        col,
      },
    };
    // console.log(wordRemainder[0], newVisited, row + 1, col);
    const down = chain(newData);
    if (down) return true;
  }

  // check left:
  if (
    col - 1 >= 0 &&
    !visited[row][col - 1] &&
    wordRemainder[0] === board[row][col - 1]
  ) {
    const newVisited = JSON.parse(JSON.stringify(visited));
    newVisited[row][col - 1] = true;
    const newData: Data = {
      board,
      visited: newVisited,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row,
        col: col - 1,
      },
    };
    // console.log(wordRemainder[0], newVisited, row, col - 1);
    const left = chain(newData);
    if (left) return true;
  }

  // check right:
  if (
    col + 1 < board[0].length &&
    !visited[row][col + 1] &&
    wordRemainder[0] === board[row][col + 1]
  ) {
    const newVisited = JSON.parse(JSON.stringify(visited));
    newVisited[row][col + 1] = true;
    const newData: Data = {
      board,
      visited: newVisited,
      wordRemainder: wordRemainder.slice(1),
      position: {
        row,
        col: col + 1,
      },
    };
    // console.log(wordRemainder[0], newVisited, row, col + 1);
    const right = chain(newData);
    if (right) return true;
  }

  return false;
}

interface Data {
  board: string[][];
  visited: boolean[][];
  position: DataPosition;
  wordRemainder: string;
}

interface DataPosition {
  row: number;
  col: number;
}
