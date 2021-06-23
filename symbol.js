// https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

var symbolsAreUnique =
  Symbol("some description") !== Symbol("some description");
console.log(symbolsAreUnique); // true;

var butTheseAreTheSame =
  Symbol.for("some description") === Symbol.for("some description");
console.log(butTheseAreTheSame); // true;

// and apparently Symbol.for('some description') is cross-realm (from iframe/sw == one generated from existing frame)
