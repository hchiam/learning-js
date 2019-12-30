// https://leetcode.com/problems/generate-parentheses/

/**
 * Using recursion/backtracking!
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => { // using recursion/backtracking
    // Basic idea: build up strings character-by-character,
    // while checking validity (to possible escape early).
    // (Apparently O( (4^n) / sqrt(n) ) instead of O(2^n).)

    const answer = []

    // handle trivial cases:
    if (isNaN(n) || n < 0) return [];
    if (n === 0) return [''];

    // count the number of left and right parentheses, and build up valid examples:
    const build = (leftCount, rightCount, example) => {
        const usedMoreRightThanLeft = rightCount < leftCount; // invalid, e.g.: '())'
        if (usedMoreRightThanLeft) return;
        if (leftCount > 0) build(leftCount-1, rightCount, example+'(');
        if (rightCount > 0) build(leftCount, rightCount-1, example+')');
        if (leftCount === 0 && rightCount === 0) {
            answer.push(example);
        }
    };
    build(n, n, '');

    return answer;
};
