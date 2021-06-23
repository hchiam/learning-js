// example: https://codepen.io/hchiam/pen/QmNvdG

// BST node:
function BSTN(v) {
  this.v = v;
  this.L = null;
  this.R = null;
  this.add = (v) => {
    if (v <= this.v) {
      if (this.L === null) {
        this.L = new BSTN(v);
      } else {
        this.L.add(v);
      }
    } else if (v > this.v) {
      if (this.R === null) {
        this.R = new BSTN(v);
      } else {
        this.R.add(v);
      }
    }
  };
}

// auto run this test:
(test = () => {
  let n = new BSTN(5);
  let passed = n.v === 5;
  n.add(3);
  n.add(8);
  n.add(1);
  n.add(4);
  n.add(7);
  n.add(10);
  //      5
  //   3     8
  // 1   4  7  10
  passed &= n.L.v === 3;
  passed &= n.L.L.v === 1;
  passed &= n.L.R.v === 4;
  passed &= n.R.v === 8;
  passed &= n.R.L.v === 7;
  passed &= n.R.R.v === 10;
  alert(JSON.stringify(n, null, 2));
  if (passed) {
    alert("All tests passed! :)");
  } else {
    alert("Not all tests passed. :(");
  }
})();
