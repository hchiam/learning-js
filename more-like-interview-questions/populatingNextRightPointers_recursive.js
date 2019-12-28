/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => { // recursive, DFS
    const noMoreLevelsInPerfectBinaryTree = (root === null || root.left === null);
    if (noMoreLevelsInPerfectBinaryTree) return root;
    root.left.next = root.right;
    const canGiveRightChildNext = root.next;
    if (canGiveRightChildNext) {
        root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
    return root;
};
