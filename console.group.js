console.log("this shows outside of the collapsible group");

console.groupCollapsed("group name (click to expand)");
console.log("something inside group");
console.log("something else inside the same group");
console.groupEnd();

console.log("this shows outside of the collapsible group");

// console.groupCollapsed('some label');
//   console.log(1);
//   console.groupCollapsed('some label');
//     console.log(2);
//     console.groupCollapsed('some label');
//       console.log(3);
//     console.groupEnd();
//   console.groupEnd();
//   console.groupCollapsed('some label');
//     console.log(4);
//   console.groupEnd();
// console.groupEnd();
