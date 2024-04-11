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

// and combining it with minimal async/await:

async function main(n) {
  await a();
  console.log('second');
  return 10;
}

async function a() {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log('first');
      res();
    },1000);
  });
}
