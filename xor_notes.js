// don't use ^ for XOR on objects - doesn't do what i originally thought: 
a = {a:1}
b = null
// i'd think object ^ null would be true
console.log('it actually is false:', Boolean(a ^ b) === false);
