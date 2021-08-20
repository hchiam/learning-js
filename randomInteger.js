function getRandomInteger(min, maxExclusive) {
  min = Math.ceil(min);
  maxExclusive = Math.floor(maxExclusive);
  var delta = maxExclusive - min;
  return Math.floor(Math.random() * delta) + min;
}

function getRandomInteger_Inclusive(minInclusive, maxInclusive) {
  const offSet1IfMin0 = minInclusive === 0 ? 1 : 0;
  const delta = maxInclusive - minInclusive;
  return Math.floor(Math.random() * (delta + offSet1IfMin0)) + minInclusive;
}

module.exports = {
  getRandomInteger,
  getRandomInteger_Inclusive,
};
