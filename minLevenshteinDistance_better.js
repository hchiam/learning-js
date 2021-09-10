// nodemon -x 'node minLevenshteinDistance_better.js'
console.log(minLevenshteinDistance_better("abc", "yabd"));

/*
DP table:
row = substring of the 2nd string
1st row = empty string
column = substring of the 1st string
1st column = empty string

table of min accumulative edits/changes per cell:
  	''	y	a	b	d
''	0 	1	2	3	4
a 	1 	1	1	2	3
b 	2 	2	2	1	2
c  	3 	3	3	2	2 = add y, swap c with d

table with example choices (3 per cell):
    ''     y      a      b      d 
''	abc    yabc   yaabc  yaabbc yaabbcd
a 	bc     ybc    yabc   yabc   yabc
b 	c      yc     yac    yabc   yabcd
c 	''     y      y      yac    yabd

for example, for row "b":
- turn "ab" into ""
- turn "ab" into "y"
- turn "ab" into "ya"
- turn "ab" into "yab"
- turn "ab" into "yabd"

3 choices:
1) diagonally = swap (1, or 0 if same)
2) rightwards = add character from 2nd string
3) downwards = remove character from 1st string
*/

// O(nm) time, O(nm) space
function minLevenshteinDistance_better(str1, str2) {
  // have to .fill and then .map to avoid accidentally modifying all rows at the same time (de-dupe references):
  const dp = new Array(str1.length + 1)
    .fill(null)
    .map(() => new Array(str2.length + 1).fill(Infinity));
  // first row:
  for (let j = 0; j < str2.length + 1; j++) {
    dp[0][j] = j;
  }
  // first column:
  for (let i = 0; i < str1.length + 1; i++) {
    dp[i][0] = i;
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

module.exports = {
  minLevenshteinDistance_better,
};
