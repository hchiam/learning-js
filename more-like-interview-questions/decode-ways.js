// https://leetcode.com/problems/decode-ways

/**
 * @param {string} s
 * @return {number}
assuming no empty string
12 -> 1,2 + 12 = 2
226 -> 2,2,6 + 2,26 + 22,6 = 3
06 -> 0,6 + 06 = both invalid = 0
DP problem, where recursive relationship is single or pair
    but also check if valid:
        cannot start single/pair with 0
        cannot have number >26 (e.g. 27-99)
    all single digits 1-9 are valid except for 0
    instead of going forward, try going backwards to get combos
        e.g.: instead of 1 or 12, rather do the following:
        e.g.: 12 -> 1,2 or 12 to get to 12
    Ot(n) Os(n^2)
    Ot(n) Os(n) with single-row array optimization
    Ot(n) Os(1)??? may not be possible with only a few variables
BCR = Ot(n) Os(1) but may not be possible for now at least in time
DP: recursive --> memo table
226
    22 (2)
    2 (1)
1111
    111 (3)
    11 (2)
    1,1,1,1
    1,11,1
    11,1,1
    11,11
2261
    226 (2)
    22 (1)
AEIO U
 */
var numDecodings = function (s) {
  // return recursion(s);
  return dpTable(s);
};

function recursion(s) {
  if (s === "") return 0;
  if (s === "0") return 0;
  if (s.startsWith("0")) return 0;
  if (s.length === 1) return 1; // assuming not '0'
  if (s.length === 2 && Number(s) < 27) {
    if (s.endsWith("0")) return 1; // '10' or '20'
    return 2; // assuming not '0x' and not 'x0'
  }
  let output = 0;
  if (s.slice(-1) !== "0") {
    const single = numDecodings(s.slice(0, -1));
    output += single;
  }
  const paired = s.slice(-2);
  if (!s.slice(-2).startsWith("0") && Number(s.slice(-2)) < 27) {
    const pair = numDecodings(s.slice(0, -2));
    output += pair;
  }
  return output;
}

function dpTable(s) {
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1; // need 1 so pair cases work:
  /**
          11 [1,1,1] 2
          10 [1,0,1] 1
          27 [1,1,0] 1
          01 [1,0,1] 1
      */
  dp[1] = s[0] !== "0" ? 1 : 0; // assuming doesn't start with '0'

  for (let i = 1; i < s.length; i++) {
    const j = i + 1; // dp index
    const single = s[i];
    const paired = s[i - 1] + s[i];
    if (single !== "0") {
      dp[j] += dp[j - 1];
    }
    if (!paired.startsWith("0") && Number(paired) < 27) {
      dp[j] += dp[j - 2];
    }
  }
  return dp[dp.length - 1];
}

module.exports = {
  recursion,
  dpTable,
};
