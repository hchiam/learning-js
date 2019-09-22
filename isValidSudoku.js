/**
 * Check if is valid sudoku board. (Code checked against Google JS ESLint rules)
 * @param {[][]} board the board.
 * @return {boolean} is valid or not.
 */
const isValidSudoku = function(board) {
  let check = new Set();

  // check rows
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      const val = board[i][j];
      if (val !== '.' && check.has(val)) {
        return false;
      } else {
        check.add(val);
      }
    }
    check = new Set();
  }

  // check columns
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      const val = board[j][i];
      if (val !== '.' && check.has(val)) {
        return false;
      } else {
        check.add(val);
      }
    }
    check = new Set();
  }

  // check sub-boxes
  for (let ib=0; ib<9; ib+=3) {
    for (let jb=0; jb<9; jb+=3) {
      // const subBoxTopLeftCorner = board[ib][jb];
      for (let i=0; i<3; i++) {
        for (let j = 0; j < 3; j++) {
          const val = board[ib + i][jb + j];
          if (val !== '.' && check.has(val)) {
            return false;
          } else {
            check.add(val);
          }
        }
      }
      check = new Set();
    }
  }

  // otherwise
  return true;
};

let input = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(input));

input = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(input));
