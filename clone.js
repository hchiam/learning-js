// to run this file, do: node clone.js

const array1 = [1,2,3];
const shallowCloneArray = [...array1];
console.log(array1);
console.log(shallowCloneArray);
console.log(array1 === array1, 'should be true');
console.log(array1 === shallowCloneArray, 'should be false');

const object1 = {a:1,b:2,c:3};
const shallowCloneObject = Object.assign({}, object1, {extraData:'online'});
console.log(object1);
console.log(shallowCloneObject);
console.log(object1 === object1, 'should be true');
console.log(object1 === shallowCloneObject, 'should be false');
