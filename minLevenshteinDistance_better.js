// nodemon -x 'node minLevenshteinDistance_better.js'
console.log(minLevenshteinDistance_better("abc", "yabd"));

/*
DP table:
row = substring of the 2nd string
1st row = empty string
column = substring of the 1st string
1st column = empty string
   		''		y		ya		yab		yabd
'' 		0 		1		2 		3  		4
a  		1 		1		1 		2  		3
ab 		2 		2		2 		1  		2
abc		3 		3		3 		2  		2 = add y, swap c with d
*/

// O(nm) time, O(nm) space
function minLevenshteinDistance_better(str1, str2) {
  const dp = new Array(str1.length + 1)
    .fill(null)
    .map(() => new Array(str2.length + 1).fill(Infinity));
  for (let i = 0; i < str1.length + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < str2.length + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      const swap = (str1[i - 1] === str2[j - 1] ? 0 : 1) + dp[i - 1][j - 1];
      const insertB = dp[i][j - 1] + 1;
      const removeA = dp[i - 1][j] + 1;
      dp[i][j] = Math.min(swap, insertB, removeA);
    }
  }
  const lastCell = dp.slice(-1)[0].slice(-1)[0];
  return lastCell;
}

// Do not edit the line below.
module.exports = {
  minLevenshteinDistance_better,
};
