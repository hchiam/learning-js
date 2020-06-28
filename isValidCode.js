function isValidCode(codeString) {
  try {
    (function () {
      new Function(codeString);
    })();
  } catch (error) {
    return false;
  }
  return true;
}

// isValidCode('a = 1'); // true
// isValidCode('a =; 1'); // false

// more info on "new Function": https://javascript.info/new-function
