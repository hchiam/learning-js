const input = [3, 6, 1, -3, 2, 7];
const expected = 4;
const output1 = maximizeExpression(input);
const output2 = maximizeExpression_cleaner(input);
console.log(input);
console.log(output1, output1 === expected);
console.log(output2, output2 === expected);

/*
Get max of a-b+c-d with locations a<b<c<d in array of integers.
Ot(n) Os(n).

BCR: Ot(n) Os(1) - key insight: try get max prev of a only. The recursive relation 
of the dynamic programming solution is max(skip, use), since you either use or not use. 
ideas:
1) brute force: each combo: Ot(n^4), Os(1)
can we do Ot(n^2) with some pre-processing or extra storage?
2) get "half-solutions"? since a-b and c-d do the same op?
	Ot(n^2) Os(n), then Ot(n^2) pairs, to get:
	Ot(n^2) Os(n) overall
how might we do better than Ot(n^2)?
how might DP help?
3) do idea 2), but instead of all pairs, somehow avoid repeat work?
let's try working thru an example:
[  3,  6,  1, -3,  2,  7]
      -3   2   0          naively looking at pairs?
           5   9
					     4
4)
[  3,  6,  1, -3,  2,  7] OR MAYBE use a DP table?
3
6
1
-3
2
7

5)
[  3,  6,  1, -3,  2,  7] OR MAYBE just find all 4 as we go?
using key insight:
   3   6   6   6   6   7 for +ve Ot(n)
	-3  -3  -1   3   3   3 for -ve Ot(n)
   but how would I use this table?

6) or instead maybe this:
make use of the running max +ve Ot(n) pass data in the -ve pass:
   0   1   2   3   4   5 (=indices)
[  3,  6,  1, -3,  2,  7]
   3   6   6   6   6   7 running max for +ve Ot(n): max a
	   \ | \ | \ | \ | \ |
	    -3   5   9   9   9 running max for -ve AFTER the +ve pass: max a-b
			   \ | \ | \ | \ |
				  -2  -2  11  16 running for +ve AFTER that -ve pass: max a-b+c
             \ | \ | \ |
						   1   1   4 running for -ve AFTER that +ve pass: max a-b+c-d
							         4 is the answer!
this works since each pass is a running max for the next term.
this could be stored in Os(n) space, with just 2 rows (prev/curr).
so Ot(n) Os(n), which is pretty close to the BCR!
*/

/** version with more obvious logic (DAMP) */
function maximizeExpression(array) {
  if (!array || array.length < 4) return 0;

  const len = array.length;
  let prev = [...array];
  let curr = new Array(len).fill(-Infinity);
  // prev: +  -  +
  // curr:  -  +  - => + - + -

  // first +
  for (let i = 1; i < array.length; i++) {
    // just getting the running max on this first pass:
    const skip = prev[i - 1];
    const use = array[i];
    prev[i] = Math.max(skip, use);
  }

  let op = 0;

  // first -
  op = -1;
  curr[1] = prev[0] + op * array[1]; // must start 2nd position earliest
  for (let i = 2; i < array.length; i++) {
    const skip = curr[i - 1];
    const use = prev[i - 1] + op * array[i];
    curr[i] = Math.max(skip, use);
  }
  [prev, curr] = [curr, prev];

  // second +
  op = +1;
  curr[2] = prev[1] + op * array[2]; // must start 3rd position earliest
  for (let i = 3; i < array.length; i++) {
    const skip = curr[i - 1];
    const use = prev[i - 1] + op * array[i];
    curr[i] = Math.max(skip, use);
  }
  [prev, curr] = [curr, prev];

  // second -
  op = -1;
  curr[3] = prev[2] + op * array[3]; // must start 4th position earliest
  for (let i = 4; i < array.length; i++) {
    const skip = curr[i - 1];
    const use = prev[i - 1] + op * array[i];
    curr[i] = Math.max(skip, use);
  }

  return curr[curr.length - 1];
}

/** version with less code (DRY) */
function maximizeExpression_cleaner(array) {
  if (!array || array.length < 4) return 0;

  const len = array.length;
  let prev = [...array];
  let curr = new Array(len).fill(0);
  // prev: +  -  +
  // curr:  -  +  - => + - + -

  // first +
  for (let i = 1; i < array.length; i++) {
    // just getting the running max on this first pass:
    const skip = prev[i - 1];
    const use = prev[i];
    prev[i] = Math.max(skip, use);
  }

  for (let startCurrIndex = 1; startCurrIndex <= 3; startCurrIndex++) {
    // 1:-, 2:+, 3:-
    const op = startCurrIndex % 2 === 0 ? +1 : -1;
    getNextCurr(prev, curr, array, op, startCurrIndex);
    if (startCurrIndex < 3) [prev, curr] = [curr, prev];
  }

  return curr[curr.length - 1];
}

// 	// first -
// 	op = -1;
// 	curr[1] = prev[0] + op * array[1]; // must start 2nd position earliest
// 	for (let i = 2; i < array.length; i++) {
// 		const skip = curr[i - 1];
// 		const use = prev[i - 1] + op * array[i];
// 		curr[i] = Math.max(skip, use);
// 	}
// 	[prev, curr] = [curr, prev];
function getNextCurr(prev, curr, array, op, startCurrIndex) {
  const start = startCurrIndex;
  if (start >= 1) {
    // otherwise start=0: start-1 = -1 index value
    curr[start] = prev[start - 1] + op * array[start];
  }
  for (let i = start + 1; i < array.length; i++) {
    const skip = curr[i - 1];
    const use = prev[i - 1] + op * array[i];
    curr[i] = Math.max(skip, use);
  }
}
