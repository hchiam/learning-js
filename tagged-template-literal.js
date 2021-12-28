// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function myTag(strings, field1, field2) {
  console.log(strings, field1, field2);
}

let output = myTag`
  string1 ${"field1"} string2 ${"field2"} string3
`; // myTag is treated as a function, whether or not it was defined

console.log(output);
