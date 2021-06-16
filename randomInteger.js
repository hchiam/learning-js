function getRandomInteger(min, maxExclusive) {
  min = Math.ceil(min);
  maxExclusive = Math.floor(maxExclusive);
  var delta = maxExclusive - min;
  return Math.floor(Math.random() * delta) + min;
}

module.exports = {
  getRandomInteger,
};
