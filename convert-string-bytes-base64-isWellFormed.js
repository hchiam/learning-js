// convert UTF-8 or UTF-16 to base64 encoding and decode back without silently replacing text with incorrect characters

// https://web.dev/articles/base64-encoding?hl=en#btoa_and_atob

exampleUsage();

/*
Optimization TODOs mentioned in the article:
- generalize into a polyfill
- change the TextDecoder parameters to throw instead of silently replacing lone surrogates
- etc.
*/

function stringToBytes(validUTF16String) {
  return new TextEncoder().encode(validUTF16String);
}

function bytesToString(bytes) {
  return new TextDecoder().decode(bytes);
}

function base64ToBytes(base64) {
  // https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  // https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

function isWellFormed(str) {
  if (typeof(str.isWellFormed)!="undefined") {
    // Use the newer isWellFormed() feature.
    return str.isWellFormed();
  } else { // polyfill for Firefox and Opera
    // Use the older encodeURIComponent().
    try {
      encodeURIComponent(str); // encodeURIComponent() throws an error for lone surrogates, which is essentially the same as isWellFormed
      return true;
    } catch (error) {
      return false;
    }
  }
}

function exampleUsage() {

  const validUTF16String = 'hello⛳❤️🧀';

  if (isWellFormed(validUTF16String)) {
    const validUTF16StringEncoded = bytesToBase64(stringToBytes(validUTF16String));
    console.log(`Encoded string: [${validUTF16StringEncoded}]`);
    // Encoded string: [aGVsbG/im7PinaTvuI/wn6eA]

    const validUTF16StringDecoded = bytesToString(base64ToBytes(validUTF16StringEncoded));
    console.log(`Decoded string: [${validUTF16StringDecoded}]`);
    // Decoded string: [hello⛳❤️🧀]
  } else {
    // Not reached in this example.
  }

  const partiallyInvalidUTF16String = 'hello⛳❤️🧀\uDE75';

  if (isWellFormed(partiallyInvalidUTF16String)) {
    // Not reached in this example.
  } else {
    console.log(`Cannot process a string with lone surrogates: [${partiallyInvalidUTF16String}]`);
  }

}
