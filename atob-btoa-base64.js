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
