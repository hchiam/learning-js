function hexStringToBitString(hexStringWithCommasForNewRows) {
  // return parseInt(hexString, 16).toString(2);
  return hexStringWithCommasForNewRows
    .split(",")
    .map((x) => parseInt(x, 16).toString(2))
    .join(",");
}
hexStringToBitString("a1,a,1"); // "10100001,1010,1"

function hexStringToBitArray(hexStringWithCommasForNewRows) {
  return hexStringWithCommasForNewRows.split(",").map((hexLetters) =>
    parseInt(hexLetters, 16)
      .toString(2)
      .split("")
      .map((x) => (x === "1" ? 1 : 0))
  );
}
hexStringToBitArray("a1,a,1"); // [[1,0,1,0,0,0,0,1],[1,0,1,0],[1]]

function bitStringToHexString(bitStringWithCommasForNewRows) {
  // return parseInt(bitString, 2).toString(16);
  return bitStringWithCommasForNewRows
    .split(",")
    .map((x) => parseInt(x, 2).toString(16))
    .join(",");
}
bitStringToHexString("10100001,1010,0001"); // "a1,a,1"
bitStringToHexString("10100001,1010,1"); // "a1,a,1"

function bitStringToBits2DArray(bitStringWithCommasForNewRows) {
  return bitStringWithCommasForNewRows
    .split(",")
    .map((x) => x.split("").map((x) => (x === "1" ? 1 : 0)));
}
bitStringToBits2DArray("10100001,1010,1"); // [[1,0,1,0,0,0,0,1],[1,0,1,0],[1]]
bitStringToBits2DArray("10100001,1010,0001"); // [[1,0,1,0,0,0,0,1],[1,0,1,0],[0,0,0,1]]
