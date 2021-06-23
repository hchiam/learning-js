const arr = [1, 2, 3];
Array.prototype.propThatShouldNotBeReadable = "whoops!";

// for...in incorrectly prints 'whoops!':
for (let i in arr) {
  console.log(arr[i]);
}

// for...of does not:
for (const value of arr) {
  console.log(value);
}

// so always use for...of, and you can get both keys and values of an array by doing this:
for (const [key, value] of Object.entries(arr)) {
  console.log(key, value);
}
