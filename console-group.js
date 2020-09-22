console.log('this shows outside of the collapsible group');

console.groupCollapsed('group name (click to expand)');
  console.log('something inside group');
  console.log('something else inside the same group');
console.groupEnd();

console.log('this shows outside of the collapsible group');
