/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}

observation: numbers only have 10 possible characters, so maybe the search isn't that bad

idea 1: try to find repeated sequence starting with largest to smallest, starting from the end of the sequence?

idea 2: thought: maybe do long division per digit and check if we've hit the same remainder?

7/26 = 0.2692307692307692 digits repeat but not in sequence, but what about their remainders? the 2nd 2 has a different remainder than the 1st 2

1/7 = 0.142857142857 has repeating digits but because the remainders repeat.

repeating remainders should guarantee repetition, and avoids having to create the raw string first and problems with never getting an "infinite" string and the associated problem with losing data with pattern truncation. look for that. time O(d) space O(10)=space O(1), where d = number of digits in raw division output.

idea 3: read: https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/1669777/Accepted-Simple-Solution-with-Step-By-Step-Detailed-Explaination/

 */
var fractionToDecimal = function (numerator, denominator) {
  if (!numerator) return "0";
  let answer = "";
  let n = numerator;
  let d = denominator;
  let a = answer;
  if ((n < 0) ^ (d < 0)) a = "-";
  n = Math.abs(n);
  d = Math.abs(d);

  let q = Math.floor(n / d);
  let r = n % d;

  a += String(q); // create the entire string, to then insert brackets if needed

  if (r === 0) return a; // e.g. 4/2 = 2

  a += "."; // has decimal

  const hs = {}; // format: { remainder: startIndex }

  while (r > 0) {
    if (r in hs) {
      const startIndex = hs[r];
      const before = a.slice(0, startIndex);
      const repeat = a.slice(startIndex);
      return `${before}(${repeat})`;
    } else {
      hs[r] = a.length; // store start index of remainder, including first r and before r*=10

      r *= 10; // have decimal(s), so *10 to continue long division digit-by-digit

      n = r;
      q = Math.floor(n / d); // next output digit; times d fits evenly in r
      a += String(q); // update output string with next digit

      r = n % d; // next remainder is what's left for next step
    }
  }

  return a;
};

module.exports = {
  fractionToDecimal,
};
