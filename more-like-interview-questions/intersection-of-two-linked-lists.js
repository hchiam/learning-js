function getIntersectionNode(headA, headB) {
  // https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/1092898/JS-Python-Java-C%2B%2B-or-Easy-O(1)-Extra-Space-Solution-w-Visual-Explanation
  // Insight 1: concatenating A+B length === B+A length but also have same common tail C.
  // Insight 2: and you can simulate concatenation by looping the pointer onto other LL.
  let a = headA;
  let b = headB;
  while (a !== b) {
    // stop at first match (or tail of both; null)
    a = a ? a.next : headB; // continue and loop onto other LL
    b = b ? b.next : headA; // continue and loop onto other LL
  }
  return a; // either match or hit tail of both (null)
}

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = {
  getIntersectionNode,
  Node,
};
