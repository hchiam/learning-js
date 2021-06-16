function getRandomNumber(min, maxExclusive) {
  var delta = maxExclusive - min;
  return Math.random() * delta + min;
}

module.exports = {
  getRandomNumber,
};
