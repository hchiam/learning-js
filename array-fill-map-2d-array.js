// for my own helper class for 2D arrays, see: https://github.com/hchiam/grid

// mnemonic: afm afm
// mnemonic: "arrows fill map, arrows fill map, value"
function get2dArray(rows, cols, valueCallback) {
  return new Array(rows).fill().map(() =>
    // afm
    new Array(cols).fill().map(() => {
      // afm
      return valueCallback(); // or just put { deep: "copy" } here
    })
  );
}

var rows = 2;
var cols = 3;
var valueCallback = () => {
  return { deep: "copy" };
};
var array2d = get2dArray(rows, cols, valueCallback);

array2d[rows - 1][cols - 1].deep = "edited 1 NOT all";

console.log(array2d);
