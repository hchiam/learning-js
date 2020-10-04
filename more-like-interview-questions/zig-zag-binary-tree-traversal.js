/* eslint-disable require-jsdoc */

const zigzag = (root) => {
  if (root === null) return [];
  if (root.val === null) return [[null]];
  if (!root.left && !root.right) return [[root.val]];

  let goingLeftToRight = true;
  const q = [];
  const currentLevel = [];
  const answer = [];
  q.push(root);

  // keep checking if current level has nodes to process:
  while (q.length) {
    // go through current level, assuming already correctly ordered:
    while (q.length) {
      const next = q.shift();
      if (next.val === null) continue;
      currentLevel.push(next);
    }

    // add the values of the current level to the final answer:
    answer.push(currentLevel.map((node) => node.val));

    // change directions:
    goingLeftToRight = !goingLeftToRight;

    // get next level queued up in the correct order:
    while (currentLevel.length) {
      const nextLevelItem = currentLevel.pop(); // .pop() is always opposite of .shift()

      if (goingLeftToRight) {
        if (nextLevelItem.left && nextLevelItem.left.val !== null) {
          q.push(nextLevelItem.left);
        }
        if (nextLevelItem.right && nextLevelItem.right.val !== null) {
          q.push(nextLevelItem.right);
        }
      } else {
        if (nextLevelItem.right && nextLevelItem.right.val !== null) {
          q.push(nextLevelItem.right);
        }
        if (nextLevelItem.left && nextLevelItem.left.val !== null) {
          q.push(nextLevelItem.left);
        }
      }
    }
  }

  return answer;
};

const zigzagFaster = (root) => {
  if (root === null) return [];
  if (root.val === null) return [[null]];
  if (!root.left && !root.right) return [[root.val]];

  let goingLeftToRight = true;
  let q = [];
  const currentLevel = [];
  const answer = [];
  q.push(root);

  // keep checking if current level has nodes to process:
  while (q.length) {
    // go through current level, assuming already correctly ordered:
    for (let i = 0; i < q.length; i++) {
      const next = q[i];
      if (next.val === null) continue;
      currentLevel.push(next);
    }
    q = [];

    // add the values of the current level to the final answer:
    answer.push(currentLevel.map((node) => node.val));

    // change directions:
    goingLeftToRight = !goingLeftToRight;

    // get next level queued up in the correct order:
    while (currentLevel.length) {
      const nextLevelItem = currentLevel.pop(); // .pop() is always opposite of .shift()

      if (goingLeftToRight) {
        if (nextLevelItem.left && nextLevelItem.left.val !== null) {
          q.push(nextLevelItem.left);
        }
        if (nextLevelItem.right && nextLevelItem.right.val !== null) {
          q.push(nextLevelItem.right);
        }
      } else {
        if (nextLevelItem.right && nextLevelItem.right.val !== null) {
          q.push(nextLevelItem.right);
        }
        if (nextLevelItem.left && nextLevelItem.left.val !== null) {
          q.push(nextLevelItem.left);
        }
      }
    }
  }

  return answer;
};

module.exports = {
  zigzag,
  zigzagFaster,
};
