// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/823/
// https://www.thepolyglotdeveloper.com/2015/04/evaluate-a-reverse-polish-notation-equation-with-javascript/
// https://dev.to/subinedge/evaluate-reverse-polish-notation-expressions-using-javascript-algorithms-jmb
// Reverse polish notation lets you omit brackets: https://en.wikipedia.org/wiki/Reverse_Polish_notation#Practical_implications

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evaluateReversePolishNotation = function (tokens) {
  // assumes input is always valid, and division truncates to 0
  const stack = [];
  tokens.forEach((x) => {
    if (isNaN(Number(x))) {
      const right = stack.pop();
      const left = stack.pop();
      let intermediate = 0;
      switch (x) {
        case "+":
          intermediate = left + right;
          break;
        case "-":
          intermediate = left - right;
          break;
        case "*":
          intermediate = left * right;
          break;
        case "/":
          intermediate = Math.trunc(left / right);
          break;
      }
      stack.push(intermediate);
    } else {
      stack.push(Number(x));
    }
  });
  return stack[0];
};

function solutionWrapper(...parameters) {
  return evaluateReversePolishNotation(...parameters);
}

module.exports = {
  solutionWrapper,
};
