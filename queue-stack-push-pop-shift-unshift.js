var queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
var firstInFirstOut = queue.shift(); // 1
queue.shift(); // 2
queue.shift(); // 3
// summary: FIFO: 123, 123

var stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
stack.pop(); // 2
var firstInLastOut = stack.pop(); // 1
// summart: FILO: 123, 321
