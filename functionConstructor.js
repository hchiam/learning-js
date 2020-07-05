var numLetters = function (letter) {
  return new Function(
    "count",
    'return "' + letter + '".repeat(Math.floor(count))'
  );
};

var n = numLetters("a");
console.log(n(3.4)); // "aaa"
