function incrementPartOfString(originalString) {
  const pattern = / (\d*?)$/; // matches things like: 'thing 1' or 'thing 2'

  const alreadyEndedWithNumber = pattern.test(originalString);

  if (alreadyEndedWithNumber) {
    // 'thing 1' --> 'thing 2'

    return originalString.replace(
      pattern,
      function incrementNumber(entireMatchString, dPart) {
        return dPart === "" ? ` 2` : ` ${Number(dPart) + 1}`;
      }
    );
  }

  return `${originalString} 2`;
}

module.exports = {
  incrementPartOfString,
};
