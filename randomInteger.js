// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInteger(minInclusive, maxExclusive) {
  minInclusive = Math.ceil(minInclusive);
  maxExclusive = Math.floor(maxExclusive);
  var delta = maxExclusive - minInclusive;
  return Math.floor(Math.random() * delta) + minInclusive;
}

function getRandomInteger_Inclusive(minInclusive, maxInclusive) {
  minInclusive = Math.ceil(minInclusive);
  maxInclusive = Math.floor(maxInclusive);
  var delta = maxInclusive - minInclusive;
  return Math.floor(Math.random() * (delta + 1)) + minInclusive;
}

module.exports = {
  getRandomInteger,
  getRandomInteger_Inclusive,
};
