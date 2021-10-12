var numSpaces = 10;
var withWhat = 3;
console.log(Array(numSpaces).fill(withWhat));
// [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

var rows = 3;
var cols = 5;
var val = false;
var array2d_BAD = new Array(rows).fill(new Array(cols).fill(val));
var array2d = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
console.log(array2d);
console.log(JSON.stringify(array2d));
// [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]
console.log(array2d_BAD);
array2d_BAD[0][1] = true;
console.log(
  "array2d_BAD is bad because editing one row edits all rows due to referencing:"
);
console.log(array2d_BAD);

var arrayFilledWithObject_BAD = new Array(cols).fill({ data: "unique to me?" });
var arrayFilledWithObject = Array.from({ length: cols }, () => ({
  data: "unchanged?",
}));
arrayFilledWithObject_BAD[1].data = "ALL changed :(";
arrayFilledWithObject[1].data = "ONLY 1 changed :)";
console.log(arrayFilledWithObject_BAD);
console.log(arrayFilledWithObject);
