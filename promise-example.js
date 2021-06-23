var test = function () {
  return new Promise(function (resolve, reject) {
    resolve("what's actually returned");
  });
};

test().then(function (result) {
  console.log(result);
  alert(result);
});

// and promise chaining;

new Promise(function (resolve, reject) {
  setTimeout(() => resolve("output 1"), 1000);
})
  .then(function (result) {
    alert(result); // 'output 1'
    return "output 2";
  })
  .then(function (result) {
    alert(result); // 'output 2'
    return "output 3";
  });
