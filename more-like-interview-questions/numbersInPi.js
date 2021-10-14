const pi = "3141592653589793238462643383279";
const numbers = [
  "314159265358979323846",
  "26433",
  "8",
  "3279",
  "314159265",
  "35897932384626433832",
  "79",
];

const output = numbersInPi(pi, numbers);
console.log(pi, "\n", numbers, "\nanswer:", output, "\n", output === 2);

/*
Minimum number of breaks/spaces to split up given pi digits into numbers that exist in numbers array. 

Key insight: prefixes+suffixes and memo. 
The prefixes + suffixes approach works with recursive checks. 
Save all in the numbers array in memo as having 0 spaces = base cases. 
Then add (sub)-solutions to the memo, building up from those base cases. 
The memo saves us from re-computing a ton of options. 

ideas:
(n = digits of pi given, m = numbers given)
1) brute force: add 1 to n spaces, and loop and verify
		Ot(n^n m), Os(n)
2) BCR = Ot(n m), Os(1) (somehow one pass, with just a count of spaces)
3) how?
observations:
- a number string can't be longer than the given section of pi
- if one section is ok, then remaining gaps may include a number to return true
- but not always: others may cover it differently & still return true
- might have to check starting w/ each number: O(nm nm)= O(n^2 m^2) time
	- and might have to check each place that each number appears
- faster lookup? pre-get all locations per numbers Ot(n m)
	- then overall becomes Ot(n m + m m), which is ≈ BCR! but Os(nm)
4) apparently we can do Ot(n^3 + m), Os(n + m)
- what if we put each number into a hashtable Ot(m) + 
- and check every prefix (starting anywhere) of pi? Ot(n^2) * Ot(n)
*/

function numbersInPi(pi, numbers) {
  const memo = {};
  for (let number of numbers) memo[number] = 0;

  const minSpaces = recursivelyCheckPrefixes(memo, pi, 0, memo);
  return minSpaces === Infinity ? -1 : minSpaces;
}

function recursivelyCheckPrefixes(memo, pi) {
  // the pi param here may simply be a suffix!
  if (pi in memo) return memo[pi]; // base case

  for (let p = 0; p < pi.length; p++) {
    for (let q = p + 1; q < pi.length; q++) {
      const prefix = pi.slice(p, q);
      const suffix = pi.slice(q, pi.length);

      if (prefix in memo) {
        const s = recursivelyCheckPrefixes(memo, suffix);
        const pPlusS = memo[prefix] + 1 + s;
        const ps = prefix + suffix;
        memo[ps] = ps in memo ? Math.min(memo[ps], pPlusS) : pPlusS;
      }
    }
  }

  return pi in memo ? memo[pi] : Infinity;
}
