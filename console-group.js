console.log('this shows outside of the collapsible group');

console.groupCollapsed('group name (click to expand)');
  console.log('something inside group');
  console.log('something else inside the same group');
console.groupEnd('group name (click to expand)'); // has to be the same name to stop adding things under the same group

console.log('this shows outside of the collapsible group');
