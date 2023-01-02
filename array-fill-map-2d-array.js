// mnemonic: afm afm
var rows = 3;
var cols = 5;
var array2d = new Array(rows).fill(null).map(() =>
  // afm
  new Array(cols).fill(null).map(() => {
    // afm
    return { deep: "copy" };
  })
);

array2d[rows - 1][cols - 1].deep = "edited just 1 NOT all";

console.log(array2d);
