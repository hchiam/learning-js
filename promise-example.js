var test = function() {
    return new Promise(function(resolve, reject) {
        resolve("what's actually returned");
    });
};

test().then(function(result) {
    console.log(result);
    alert(result);
});
