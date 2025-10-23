function hexStringToBitString(hexStringWithCommasForNewRows) {
  // return parseInt(hexString, 16).toString(2);
  return hexStringWithCommasForNewRows
    .split(",")
    .map((hexLetters) => {
      const row = [];
      hexLetters.split("").forEach((hexLetter) => {
        row.push(...parseInt(hexLetter, 16).toString(2).padStart(4, "0"));
      });
      return row.join("");
    })
    .join(",");
}
console.log(hexStringToBitString("a1,a,1")); // "10100001,1010,0001"
console.log(hexStringToBitString("1a")); // "00011010"

function hexStringToBitArray(hexStringWithCommasForNewRows) {
  return hexStringWithCommasForNewRows.split(",").map((hexLetters) => {
    const row = [];
    hexLetters.split("").forEach((hexLetter) => {
      row.push(
        ...parseInt(hexLetter, 16)
          .toString(2)
          .padStart(4, "0")
          .split("")
          .map((x) => (x === "1" ? 1 : 0))
      );
    });
    return row;
  });
}
console.log(hexStringToBitArray("a1,a,1")); // [[1,0,1,0,0,0,0,1],[1,0,1,0],[0,0,0,1]]

function bitStringToHexString(bitStringWithCommasForNewRows) {
  // return parseInt(bitString, 2).toString(16);
  return bitStringWithCommasForNewRows
    .split(",")
    .map((x) => parseInt(x, 2).toString(16))
    .join(",");
}
console.log(bitStringToHexString("10100001,1010,0001")); // "a1,a,1"
console.log(bitStringToHexString("10100001,1010,1")); // "a1,a,1"

function bitStringToBits2DArray(bitStringWithCommasForNewRows) {
  return bitStringWithCommasForNewRows
    .split(",")
    .map((x) => x.split("").map((x) => (x === "1" ? 1 : 0)));
}
console.log(bitStringToBits2DArray("10100001,1010,1")); // [[1,0,1,0,0,0,0,1],[1,0,1,0],[1]]
console.log(bitStringToBits2DArray("10100001,1010,0001")); // [[1,0,1,0,0,0,0,1],[1,0,1,0],[0,0,0,1]]
