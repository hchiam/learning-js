function getRandomInteger(min, maxExclusive) {
  min = Math.ceil(min);
  maxExclusive = Math.floor(maxExclusive);
  var delta = maxExclusive - min;
  return Math.floor(Math.random() * delta) + min;
}

function getRandomInteger_Inclusive(minInclusive, maxInclusive) {
  const delta = maxInclusive - minInclusive;
  return Math.floor(Math.random() * (delta + 1)) + minInclusive;
}

module.exports = {
  getRandomInteger,
  getRandomInteger_Inclusive,
};
