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
const connect = (root) => { // iterative, BFS
    const noMoreLevels = (root === null || root.left === null);
    if (noMoreLevels) return root;
    const q = [root];
    while (q.length > 0) {
        const n = q.shift();
        const hitBottomOfPerfectBinaryTree = !n.left;
        if (hitBottomOfPerfectBinaryTree) {
            break;
        }
        n.left.next = n.right;
        const canGiveRightChildNext = n.next;
        if (canGiveRightChildNext) {
            n.right.next = n.next.left;
        }
        q.push(n.left);
        q.push(n.right);
    }
    return root;
};
