console.log(JSON.stringify({ a: 1 }));
// (where null is is a function to modify the stringification)
console.log(JSON.stringify({ a: 1 }, null, 2));
console.log(JSON.stringify({ a: 1 }, null, 4));
