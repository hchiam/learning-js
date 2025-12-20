// removeDiacritics("ā á ǎ à a ë") === "a a a a a e"; // true
function removeDiacritics(text) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
