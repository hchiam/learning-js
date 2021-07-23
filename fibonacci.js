function fibonacci_recursive(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

function fibonacci_memo(n) {
  if (n < 0) return 0;
  const memo = [0, 1];
  let i = 2;
  while (i <= n) {
    memo[i] = memo[i - 1] + memo[i - 2];
    i++;
  }
  return memo[memo.length - 1];
}

function fibonacci_iterative(n) {
  if (n < 0) return 0;
  if (n < 2) return n;
  let prev = 0;
  let curr = 1;
  let i = 1;
  while (i < n) {
    [prev, curr] = [curr, prev + curr];
    i++;
  }
  return curr;
}

function fibonacci_direct(n) {
  if (n < 1) return 0;
  const sqrt5 = Math.sqrt(5);
  const left = (1 + sqrt5) / 2;
  const right = (1 - sqrt5) / 2;
  const approx = (left ** n - right ** n) / sqrt5;
  return Math.round(approx);
}

module.exports = {
  fibonacci_recursive,
  fibonacci_memo,
  fibonacci_iterative,
  fibonacci_direct,
};
