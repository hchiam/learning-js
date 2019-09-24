// (linted with Google style guide ES Lint rules)

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let output = '';

  // handle invalid input
  if (s === null || s.length === 0) {
    return '';
  }

  // handle trivial input
  if (s.length === 1) {
    return s;
  }

  output = s[0]; // fallback to one character

  // loop through and get even (2) and odd (3) "base" seeds:
  const evens = {};
  const odds = {};

  // evens:
  for (let i = 0; i < s.length - 1; i++) {
    const element = s[i];
    const next = s[i+1];
    if (element === next) {
      evens[i] = element + next;
    }
  }

  // odds:
  for (let i = 0; i < s.length - 2; i++) {
    const element = s[i];
    const next = s[i+1];
    const nextSkip = s[i+2];
    if (element === nextSkip) {
      odds[i] = element + next + nextSkip;
    }
  }

  // "grow" from base odds seeds:
  output = grow(output, odds, s);
  // "grow" from base evens seeds:
  output = grow(output, evens, s);

  return output;
};

const grow = (currentMaxCandidate, seeds, inputString) => {
  let output = currentMaxCandidate;

  for (const key in seeds) {
    if (seeds.hasOwnProperty(key)) {
      let element = seeds[key];
      const k = parseInt(key);
      const len = element.length;
      if (output.length === 1) {
        output = element;
      }
      for (let i = 1; k-i >= 0 && k+(len-1)+i < inputString.length; i++) {
        const left = inputString[k-i];
        const right = inputString[k+(len-1)+i];
        if (left === right) {
          element = left + element + right;
          if (element.length > output.length) {
            output = element;
          }
        } else {
          break;
        }
      }
    }
  }

  return output;
};

// const t0 = performance.now();
console.log(longestPalindrome('babad') === 'bab');
console.log(longestPalindrome('babad') !== 'aba');
console.log(longestPalindrome('babab') === 'babab');
console.log(longestPalindrome('aaaaa') === 'aaaaa');
console.log(longestPalindrome('cbbd') === 'bb');
console.log(longestPalindrome('abcdcabbacdcxy') === 'cdcabbacdc');
console.log(longestPalindrome('aabcdcabbacdcxya') === 'cdcabbacdc');
console.log(longestPalindrome('') === '');
console.log(longestPalindrome([]) === '');
console.log(longestPalindrome('aababaaaaabobaaaaababaa') === 'aababaaaaabobaaaaababaa');
console.log(longestPalindrome('aababaaaaabobaaaaaababaa') === 'aaaaabobaaaaa');
console.log(longestPalindrome('ac') === 'a');
console.log(longestPalindrome('abcdefghijklmnoqrstuvwxyz') === 'a');
// const t1 = performance.now();
// console.log(`Call took ${t1-t0} ms`);
