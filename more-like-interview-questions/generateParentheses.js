// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
const answers = [['()'],['()()','(())']];
const generateParentheses = (n) => {
    // basic idea:
    // 1) build up cases for n-1
    // 2) use those to build cases for n by "moving" () "through" the cases, ignoring repeats
    // O(n!) > O(c^n etc.) -> can we do better? (try backtracking later, which is O((4^n)/sqrt(n)))
    if (n < 0 || !n || isNaN(n)) return [];
    if (n === 0) return [''];
    if (n <= answers.length) return answers[n-1];
    for (let newCase = answers.length; newCase <= n; newCase++) {
        const temp = new Set();
        // build next case from previous
        for (let example = 0; example < answers[newCase-1].length; example++) {
            const exampleCase = answers[newCase-1][example];
            for (let char = 0; char < exampleCase.length; char++) {
                // use cases from n-1 to build cases for n by "moving" () "through" the cases, ignoring repeats
                const generatedCase = exampleCase.slice(0, char) + '()' + exampleCase.slice(char);
                temp.add(generatedCase); // Set only accepts new members
            }
        }
        answers[newCase] = [...temp];
    }
    return answers[n-1];
};
