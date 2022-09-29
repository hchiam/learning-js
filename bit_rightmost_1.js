function getNumberWithJustRightmost1BitSet(number) {
  return number & ~(number - 1);
}

module.exports = {
  getNumberWithJustRightmost1BitSet,
};
