// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(minInclusive, maxExclusive) {
  var delta = maxExclusive - minInclusive;
  return Math.random() * delta + minInclusive;
}

module.exports = {
  getRandomNumber,
};
