function isValidCode(codeString) {
  try {
    new Function(codeString);
  } catch (error) {
    return false;
  }
  return true;
}

// isValidCode('a = 1'); // true
// isValidCode('a =; 1'); // false
