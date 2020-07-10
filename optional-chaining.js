var a = { a: 1, b: 2 };
var nonExistentProps = a.dog?.asdf.qwerty?.zxcv; // don't do final "?" though: .zxcv?
var nonExistentFunction = a.dog?.nonExistentFunction();
// no errors, just undefined values
