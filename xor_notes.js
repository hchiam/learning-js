// don't use ^ for XOR on objects - doesn't do what i originally thought: 
a = {a:1}
b = null
console.log('i expect it to be true:', Boolean(a ^ b) === true);
console.log('what it actually is false:', Boolean(a ^ b) === false);
console.log('unlike true ^ false', Boolean(true ^ false) === true)
