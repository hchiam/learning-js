// dynamic programming, with bit optimizations
// https://cses.fi/book/book.pdf#page=112
// Note to self: just backing up this code, in hopes of understanding it better in future

function print() {
  console.log(JSON.stringify(total).replace(/\],\[/g, "],\n[").slice(1) + "\n");
}

const k = 3;
const n = 8;

const price = [
  [6, 9, 5, 2, 8, 9, 1, 6],
  [8, 2, 6, 2, 7, 5, 7, 2],
  [5, 3, 9, 7, 3, 5, 1, 4],
];

const total =
  // [1<<k][n] = [1<<3][8] = [8][8]
  [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

for (let x = 0; x < k; x++) {
  total[1 << x][0] = price[x][0];
}

print();
/**
[0,0,0,0,0,0,0,0],
[6,0,0,0,0,0,0,0],
[8,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[5,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]]
*/

for (let d = 1; d < n; d++) {
  for (let s = 0; s < 1 << k; s++) {
    total[s][d] = total[s][d - 1];
    for (let x = 0; x < k; x++) {
      if (s & (1 << x)) {
        // console.log(
        //   s.toString(2).padStart(3, 0).replace(/1/g, "\x1b[36m1\x1b[0m"),
        //   "&",
        //   (1 << x).toString(2).padStart(3, 0).replace(/1/g, "\x1b[36m1\x1b[0m"),
        //   "=",
        //   (s & (1 << x))
        //     .toString(2)
        //     .padStart(3, 0)
        //     .replace(/1/g, "\x1b[36m1\x1b[0m")
        // );
        // console.log(
        //   total[s ^ (1 << x)][d - 1],
        //   price[x][d],
        //   total[s ^ (1 << x)][d - 1] + price[x][d]
        // );
        total[s][d] = Math.min(
          total[s][d],
          total[s ^ (1 << x)][d - 1] + price[x][d]
        );
      }
    }
  }
}

print();
/**
[0,0,0,0,0,0,0,0],
[6,6,5,2,2,2,1,1],
[8,2,2,2,2,2,2,2],
[0,0,0,0,0,0,0,0],
[5,3,3,3,3,3,1,1],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]]
*/

// how does this lead to the final answer of minimal price of 5?
// or of product0,day3 (2) + product1,day1 (2) + product2,day6 (1)?
