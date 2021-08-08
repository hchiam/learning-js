// see other solutions for ideas: https://leetcode.com/submissions/detail/535289880/?from=explore&item_id=1294

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};
var Node = function (val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let pointer = this.head;
  for (let i = 0; i < index; i++) {
    pointer = pointer.next;
  }
  return pointer.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  if (this.head) this.head.prev = newNode;
  this.head = newNode;

  if (this.size === 0) this.tail = this.head;

  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.tail) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = this.tail.next;
  } else {
    this.tail = newNode;
    this.head = this.tail;
  }

  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0 || !this.head) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  // else add somewhere in the middle:

  const newNode = new Node(val);

  let prev = this.head;
  for (let i = 0; i < index - 1; i++) {
    // stop right before index
    prev = prev.next;
  }
  const next = prev.next;

  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = next;
  if (next) next.prev = newNode;

  this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size || !this.head) return;
  // else at head or tail or somewhere in the middle:

  if (index === 0) {
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.size--;
    return;
  } else if (index === this.size - 1) {
    // at tail
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    this.size--;
    return;
  }
  // else somewhere in the middle:

  let prev = this.head;
  for (let i = 0; i < index - 1; i++) {
    // stop right before index
    prev = prev.next;
  }
  const curr = prev.next;

  prev.next = curr.next;
  curr.next.prev = prev;

  this.size--;
};

/**
 * console.log the values for debugging
 * @return {void}
 */
MyLinkedList.prototype.print = function () {
  const output = [];
  let pointer = this.head;
  while (pointer) {
    output.push(pointer.val);
    pointer = pointer.next;
  }
  console.log("size:", this.size);
  console.log(output, "\n");
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const instructions = [
  "MyLinkedList",
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  "deleteAtIndex",
  "addAtHead",
  "addAtTail",
  "get",
  "addAtHead",
  "addAtIndex",
  "addAtHead",
];
const values = [
  [],
  [7],
  [2],
  [1],
  [3, 0],
  [2],
  [6],
  [4],
  [4],
  [4],
  [5, 0],
  [6],
];

// const instructions = [
//   "MyLinkedList",
//   "addAtHead",
//   "get",
//   "addAtTail",
//   "deleteAtIndex",
//   "get",
//   "addAtTail",
//   "get",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtTail",
//   "addAtTail",
//   "addAtTail",
//   "deleteAtIndex",
//   "addAtIndex",
//   "addAtHead",
//   "addAtIndex",
//   "addAtTail",
//   "addAtHead",
//   "get",
//   "addAtHead",
//   "addAtTail",
//   "addAtHead",
//   "addAtHead",
//   "get",
//   "addAtHead",
//   "addAtHead",
//   "addAtTail",
//   "addAtHead",
//   "addAtTail",
//   "addAtTail",
//   "deleteAtIndex",
//   "addAtTail",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtTail",
//   "addAtIndex",
//   "addAtHead",
//   "addAtTail",
//   "addAtHead",
//   "deleteAtIndex",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtTail",
//   "addAtTail",
//   "addAtHead",
//   "addAtHead",
//   "get",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtTail",
//   "deleteAtIndex",
//   "addAtTail",
//   "addAtTail",
//   "addAtTail",
//   "addAtIndex",
//   "addAtIndex",
//   "get",
//   "addAtTail",
//   "addAtTail",
//   "addAtHead",
//   "addAtTail",
//   "addAtTail",
//   "addAtHead",
//   "get",
//   "addAtTail",
//   "get",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtIndex",
//   "addAtIndex",
//   "deleteAtIndex",
//   "get",
//   "addAtTail",
//   "addAtTail",
//   "addAtHead",
//   "get",
//   "addAtHead",
//   "addAtTail",
//   "addAtIndex",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtHead",
//   "addAtTail",
//   "get",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtTail",
//   "addAtTail",
//   "addAtHead",
//   "addAtHead",
//   "deleteAtIndex",
//   "get",
//   "addAtHead",
//   "addAtTail",
//   "addAtHead",
//   "addAtTail",
// ];
// const values = [
//   [],
//   [24],
//   [1],
//   [18],
//   [1],
//   [1],
//   [30],
//   [2],
//   [1],
//   [3],
//   [3],
//   [33],
//   [97],
//   [43],
//   [12],
//   [10],
//   [1],
//   [1, 56],
//   [30],
//   [8, 83],
//   [57],
//   [74],
//   [5],
//   [98],
//   [72],
//   [34],
//   [61],
//   [6],
//   [70],
//   [24],
//   [91],
//   [99],
//   [13],
//   [10],
//   [17],
//   [84],
//   [16],
//   [73],
//   [88],
//   [4, 19],
//   [59],
//   [41],
//   [57],
//   [10],
//   [18],
//   [2],
//   [12],
//   [25],
//   [1],
//   [77],
//   [1],
//   [7],
//   [34],
//   [87],
//   [13],
//   [4],
//   [12],
//   [11],
//   [10, 92],
//   [21, 55],
//   [11],
//   [38],
//   [31],
//   [45],
//   [4],
//   [21],
//   [38],
//   [4],
//   [88],
//   [12],
//   [22],
//   [40],
//   [22],
//   [23],
//   [13, 96],
//   [24, 50],
//   [8],
//   [14],
//   [25],
//   [53],
//   [42],
//   [6],
//   [58],
//   [55],
//   [18, 72],
//   [13],
//   [30],
//   [97],
//   [59],
//   [47],
//   [24],
//   [37],
//   [26],
//   [31],
//   [93],
//   [66],
//   [11],
//   [43],
//   [70],
//   [36],
//   [31],
//   [28],
// ];

let data = null;
instructions.forEach((instruction, i) => {
  const inputs = values[i];
  if (instruction === "MyLinkedList") {
    data = new MyLinkedList();
  } else {
    data[instruction](...inputs);
    console.log(instruction, inputs);
    data.print();
  }
});
