function removeUnicodeTagCharacters(str) {
  return str.replace(/\u{E0001}|[\u{E0020}-\u{E007F}]/gu, "");
}
