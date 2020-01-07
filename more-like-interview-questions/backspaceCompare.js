/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/backspace-string-compare/

function solutionWrapper(...parameters) {
  return backspaceCompare_using_generator(...parameters);
  // return backspaceCompare_faster(...parameters);
  // return backspaceCompare_slower(...parameters);
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare_using_generator = (S, T) => {
  let done = false;
  const sIterator = getNext(S); // NOT getNext(S).next();
  const tIterator = getNext(T); // NOT getNext(T).next();
  while (!done) {
    const s = sIterator.next(); // NOT getNext(S).next();
    const t = tIterator.next(); // NOT getNext(T).next();
    done = s.done || t.done;
    if (s.value !== t.value) return false;
  }
  return true;

  function* getNext(str) {
    let skip = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === '#') {
        skip++;
      } else if (skip > 0) {
        skip--;
      } else {
        yield str[i];
      }
    }
  }
};

const backspaceCompare_faster = (S, T) => {
  let skipS = 0;
  let skipT = 0;
  let s = S.length-1;
  let t = T.length-1;
  while (s >= 0 && t >= 0) {
    while (S[s] === '#' || skipS > 0) {
      if (S[s] === '#') {
        skipS++;
      } else if (skipS > 0) {
        skipS--;
      }
      s--;
    }
    const charS = S[s];
    while (T[t] === '#' || skipT > 0) {
      if (T[t] === '#') {
        skipT++;
      } else if (skipT > 0) {
        skipT--;
      }
      t--;
    }
    const charT = T[t];
    if (charS !== charT) return false;
    s--;
    t--;
  }
  // deal with any remaining that could be deleted:
  while (S[s] === '#' || skipS > 0) {
    if (S[s] === '#') {
      skipS++;
    } else if (skipS > 0) {
      skipS--;
    }
    s--;
  }
  // deal with any remaining that could be deleted:
  while (T[t] === '#' || skipT > 0) {
    if (T[t] === '#') {
      skipT++;
    } else if (skipT > 0) {
      skipT--;
    }
    t--;
  }
  // character remaining in one of them: (XOR)
  if (s >= 0 ^ t >= 0) return false;
  return true;
};

const backspaceCompare_slower = (S, T) => {
  let skip = 0;
  const outputS = []; // will be backwards
  for (let s = S.length-1; s >= 0; s--) {
    if (S[s] === '#') {
      skip++;
    } else if (skip > 0) {
      skip--;
    } else {
      outputS.push(S[s]);
    }
  }
  skip = 0;
  const outputT = []; // will be backwards
  for (let t = T.length-1; t >= 0; t--) {
    if (T[t] === '#') {
      skip++;
    } else if (skip > 0) {
      skip--;
    } else {
      outputT.push(T[t]);
    }
  }
  if (outputS.length !== outputT.length) return false;
  for (let i = 0; i < outputS.length; i++) {
    if (outputS[i] !== outputT[i]) return false;
  }
  return true;
};

module.exports = {
  solutionWrapper,
};
