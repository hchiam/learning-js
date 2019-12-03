/* eslint-disable require-jsdoc */

const compareVersion = (version1, version2) => {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const maxLength = Math.max(v1.length, v2.length);
  v1.length = maxLength;
  v2.length = maxLength;
  for (let i = 0; i < maxLength; i++) {
    let no0v1 = v1[i];
    if (no0v1 && no0v1.length > 1) {
      no0v1 = no0v1.replace(/^0+/g, '');
    } else if (!no0v1) {
      no0v1 = 0;
    }
    let no0v2 = v2[i];
    if (no0v2 && no0v2.length > 1) {
      no0v2 = no0v2.replace(/^0+/g, '');
    } else if (!no0v2) {
      no0v2 = 0;
    }
    if (parseInt(no0v1) > parseInt(no0v2)) return 1;
    if (parseInt(no0v1) < parseInt(no0v2)) return -1;
  }
  return 0;
};

function solutionWrapper(version1, version2) {
  return compareVersion(version1, version2);
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
