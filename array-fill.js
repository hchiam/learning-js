var numSpaces = 10;
var withWhat = 3;
console.log(Array(numSpaces).fill(withWhat));
// [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

var rows = 2;
var cols = 4;
var val = false;
var array2d = new Array(rows).fill(new Array(cols).fill(val));
console.log(array2d);
console.log(JSON.stringify(array2d));
// [[false,false,false,false], [false,false,false,false]]
