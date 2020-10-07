// tsc boggle.ts --lib es6,dom && node boggle.js
var board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
console.log(exist(board, "ABCCED") === true);
resetBoard();
console.log(exist(board, "B") === true);
resetBoard();
console.log(exist(board, "SEE") === true);
resetBoard();
console.log(exist(board, "ABCB") === false);
resetBoard();
console.log(exist(board, "X") === false);
resetBoard();
console.log(exist(board, "CCC") === false);
function resetBoard() {
    board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ];
}
function exist(board, word) {
    for (var r = 0; r < board.length; r++) {
        for (var c = 0; c < board[0].length; c++) {
            if (board[r][c] === word[0]) {
                var temp = board[r][c];
                board[r][c] = "visited";
                var data = {
                    board: board,
                    wordRemainder: word.slice(1),
                    position: {
                        row: r,
                        col: c
                    }
                };
                // console.log(word[0], board, r, c);
                var found = chain(data);
                if (found)
                    return true;
                board[r][c] = temp;
            }
        }
    }
    return false;
}
function chain(_a) {
    var board = _a.board, _b = _a.position, row = _b.row, col = _b.col, wordRemainder = _a.wordRemainder;
    // base case:
    if (wordRemainder === "" || wordRemainder.length === 0)
        return true;
    // check up:
    if (row - 1 >= 0 &&
        board[row - 1][col] !== "visited" &&
        wordRemainder[0] === board[row - 1][col]) {
        var temp = board[row - 1][col];
        board[row - 1][col] = "visited";
        var newData = {
            board: board,
            wordRemainder: wordRemainder.slice(1),
            position: {
                row: row - 1,
                col: col
            }
        };
        // console.log(wordRemainder[0], board, row - 1, col);
        var up = chain(newData);
        if (up)
            return true;
        board[row - 1][col] = temp;
    }
    // check down:
    if (row + 1 < board.length &&
        board[row + 1][col] !== "visited" &&
        wordRemainder[0] === board[row + 1][col]) {
        var temp = board[row + 1][col];
        board[row + 1][col] = "visited";
        var newData = {
            board: board,
            wordRemainder: wordRemainder.slice(1),
            position: {
                row: row + 1,
                col: col
            }
        };
        // console.log(wordRemainder[0], board, row + 1, col);
        var down = chain(newData);
        if (down)
            return true;
        board[row + 1][col] = temp;
    }
    // check left:
    if (col - 1 >= 0 &&
        board[row][col - 1] !== "visited" &&
        wordRemainder[0] === board[row][col - 1]) {
        var temp = board[row][col - 1];
        board[row][col - 1] = "visited";
        var newData = {
            board: board,
            wordRemainder: wordRemainder.slice(1),
            position: {
                row: row,
                col: col - 1
            }
        };
        // console.log(wordRemainder[0], board, row, col - 1);
        var left = chain(newData);
        if (left)
            return true;
        board[row][col - 1] = temp;
    }
    // check right:
    if (col + 1 < board[0].length &&
        board[row][col + 1] !== "visited" &&
        wordRemainder[0] === board[row][col + 1]) {
        var temp = board[row][col + 1];
        board[row][col + 1] = "visited";
        var newData = {
            board: board,
            wordRemainder: wordRemainder.slice(1),
            position: {
                row: row,
                col: col + 1
            }
        };
        // console.log(wordRemainder[0], board, row, col + 1);
        var right = chain(newData);
        if (right)
            return true;
        board[row][col + 1] = temp;
    }
    return false;
}
