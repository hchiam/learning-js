/**
 * @param { Buffer } data
 */
function fuzzMe(data) {
  const s = data.toString();
  if (s.length !== 8) {
    return "ok";
  }
  if (s.slice(0, 8) === "unlikely") {
    throw Error("Got into an artificial fail case example!");
  }
  return "ok";
}
module.exports = { fuzzMe, fuzz: fuzzMe }; // the function to be fuzzed must be named "fuzz" for non-jest test script
