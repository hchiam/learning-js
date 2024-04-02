/**
 * Mnemonics:
 * btoa = "Basic to Abstract" = returns Base64-encoded string.
 * atob = "Abstract to Basic" = returns the original data (sometimes plain text).
 *
 * Technically B = Binary and A = ASCII,
 * but I personally find that unhelpful for remembering which one returns plain text.
 */
const base64Encoded = btoa("Basic to Abstract");
const plainText = atob("QmFzaWMgdG8gQWJzdHJhY3Q=");
console.log(base64Encoded);
console.log(plainText);

/** but to actualy convert POSITIVE NUMBERS to/from base 64: 
https://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript/64072170#64072170
*/
function toBase64Number(x) {
  const digit = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  return Number(x).toString(2).split(/(?=(?:.{6})+)/g).map(v=>digit[parseInt(v,2)]).join("");
  // (?=...) is positive lookahead, to determine if can split at current location
  // (?:...) is non-capture group, to improve perf since don't need to capture anything, just need to check if have 6 characters ahead for the positive lookahead
  // (?!.) is negative lookahead, which isn't really needed in the context of toBase64Number
  // /(?=(?:.{6})+)/g could just be /(?=(.{6})+)/g but that fails test cases above 63
}
function fromBase64Number(x) {
  const digit = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  return String(x).split("").reduce((s,v)=>s*64+digit.indexOf(v),0);
}
