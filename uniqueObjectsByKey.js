/**
Based on: https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
Example:
var array =
  [
    { "name": "Joe", "age": 17 },
    { "name": "Bob", "age": 17 },
    { "name": "Carl", "age": 35 }
  ];
console.log(uniqueObjectsByKey(array, 'age'));
*/
function uniqueObjectsByKey(arrayOfObjects, key) {
  return [...new Map(arrayOfObjects.map((item) => [item[key],item]))].map(item => item[1]);
}
