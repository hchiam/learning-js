// https://leetcode.com/problems/binary-tree-maximum-path-sum

/** TreeNode(val,left,right) val/0 left/null right/null */
/**
 * @param {TreeNode} root
 * @return {number}
BCR: Ot(n) Os(1)
likely have to do DFS, which is Ot(n), so can't do any better
but can we still achieve that? let's do brute force first?
per node, get max of:
    node = Ot(1)
    best 1 left + node = Ot(n/2) = Ot(n)
    best 1 right + node = Ot(n/2) = Ot(n)
    best 1 left + best 1 right + node = Ot(1), add sums from prev step
    2 left = Ot(n/2) = Ot(n)
    2 right = Ot(n/2) = Ot(n)
    = Ot(2n) = Ot(n) per node
    = Ot(n^2) overall > BCR
can we do better?
    what if we do bottom-up, i.e. from the leaves, and compute "up"?
    if no leaves: max = node
    if only left:
        maybe max = max(node, left, node + left)?
        but how do we know if left has been used for single/2-armed?
            need data --> Os(n) for Ot(n)
            so rather:
            if left 1-armed: max = max(node, left, node + left)
            if left 2-armed: max = max(node, left)
    if only right:
        maybe max = max(node, right, node + right)?
        but how do we know if right has been used for single/2-armed?
            need data --> Os(n) for Ot(n)
            so rather:
            if right 1-armed: max = max(node, right, node + right)
            if right 2-armed: max = max(node, right)
    if left and right:
        max = max(node,
                    left, node + left1 if left 1-armed,
                    right, node + right1 if right 1-armed,
                    node + left1 + right1 if both left && right 1-armed)
    so in summary:
        max = max(node,
                    left(1,2) if left,
                    right(1,2) if right)
        max = max(max,
                    node + left(1) if left 1-armed > 0,
                    node + right(1) if right 1-armed > 0,
                    node + left(1) + right(1) if both of the above are true)
        also track max single arm for current node
            = max(node, node + left(1), node + right(1))
        return max
so so far Ot(n^2) Os(1)
       vs Ot(n)   Os(n) --> let's choose this one for now
 */
let running = 0;
var maxPathSum = function (root) {
  running++;
  const n = root;
  const l = n.left;
  const r = n.right;
  // n.twoArmed = false;
  n.maxSingleArm = n.val;
  if (!l && !r) {
    running--;
    if (running === 0) {
      console.log(JSON.stringify(n));
    }
    return n.val;
  }

  // setup to match convention in the comments above:
  let node = n.val;
  let left = 0;
  let right = 0;

  if (l) left = maxPathSum(l);
  if (r) right = maxPathSum(r);

  // now:

  // max = max(node,
  //             left(1,2) if left,
  //             right(1,2) if right)
  // max = max(max,
  //             node + left(1) if left 1-armed > 0,
  //             node + right(1) if right 1-armed > 0,
  //             node + left(1) + right(1) if both of the above are true)
  // also track max single arm for current node
  //      = max(node, node + left(1), node + right(1))
  let max = node;

  if (l) {
    max = Math.max(max, left);
    // n.maxSingleArm = max; // can't use this because must include node
  }
  if (r) {
    max = Math.max(max, right);
    // n.maxSingleArm = max; // can't use this because must include node
  }

  const useLeftAsArm =
    l &&
    l.maxSingleArm > 0; /*&& !l.twoArmed && left > 0 && node < node + left*/
  if (useLeftAsArm) {
    max = Math.max(max, node + l.maxSingleArm);
    n.maxSingleArm = Math.max(n.maxSingleArm, node + l.maxSingleArm);
  }
  const useRightAsArm =
    r &&
    r.maxSingleArm > 0; /*&& !r.twoArmed && right > 0 && node < node + right*/
  if (useRightAsArm) {
    max = Math.max(max, node + r.maxSingleArm);
    n.maxSingleArm = Math.max(n.maxSingleArm, node + r.maxSingleArm);
  }

  const useBothArms = useLeftAsArm && useRightAsArm;
  if (useBothArms) {
    // n.twoArmed = true;
    max = Math.max(max, node + l.maxSingleArm + r.maxSingleArm);
  }

  running--;
  if (running === 0) {
    console.log(JSON.stringify(n));
  }
  return max;
};

module.exports = {
  maxPathSum,
};
