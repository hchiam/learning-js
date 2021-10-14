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
console.log(output, output === 2);

/*
n = digits of pi given, m = numbers given
ideas:
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
  let numberOfSpaces = Infinity;
  const memo = {};
  // locationsPerNumber: {#:[,]} range inclusive i to exclusive i for easier slicing
  // const locationsPerNumber = getLocationsPerNumber(pi, numbers);
  // numberOfSpaces = recursivelyCheckPrefixes(locationsPerNumber, pi, 0, memo);
  for (let number of numbers) {
    memo[number] = 0;
  }
  numberOfSpaces = recursivelyCheckPrefixes(memo, pi, 0, memo);
  console.log(memo);
  return numberOfSpaces === Infinity ? -1 : numberOfSpaces;
}

// function getLocationsPerNumber(pi, numbers) {
//   const locationsPerNumber = {};
//   for (let n = 0; n < numbers.length; n++) {
//     const number = numbers[n];
//     const earlyEnd = number.length - 1;
//     for (let p = 0; p < pi.length - earlyEnd; p++) {
//       const sectionOfPi = pi.slice(p, p + number.length);
//       if (sectionOfPi === number) {
//         if (number in locationsPerNumber) {
//           // exclusive range p to p + number.length for easier slicing:
//           locationsPerNumber[number].push([p, p + number.length]);
//         } else {
//           locationsPerNumber[number] = [p, p + number.length];
//         }
//       }
//     }
//   }
//   return locationsPerNumber;
// }

// locationsPerNumber: {number:[inclusive,exclusive]}
// function recursivelyCheckPrefixes(locsPerNum, pi, spaces = 0, memo) {
function recursivelyCheckPrefixes(memo, pi, spaces = 0) {
  if (pi in memo /*locsPerNum*/) {
    // base case
    // memo[pi] = pi in memo ? Math.min(memo[pi], spaces) : spaces;
    // memo[pi] = 0; // just this?
    return memo[pi];
  }
  for (let p = 0; p < pi.length; p++) {
    for (let q = p + 1; q < pi.length; q++) {
      const prefix = pi.slice(p, q);
      const suffix = pi.slice(q, pi.length);
      if (prefix in memo /*locsPerNum*/) {
        // memo[prefix] = 0;
        const s = recursivelyCheckPrefixes(memo /*locsPerNum*/, suffix, 0);
        const pPlusS = memo[prefix] + 1 + s;
        console.log(
          "\n",
          "\n",
          memo[prefix],
          1,
          s,
          "=",
          pPlusS,
          prefix,
          suffix,
          pi
        );
        const ps = prefix + suffix;
        memo[ps] = ps in memo ? Math.min(memo[ps], pPlusS) : pPlusS; //pi in memo ? Math.min(memo[pi], pPlusS) : pPlusS;
      }
    }
  }
  return pi in memo ? memo[pi] : Infinity;
}
