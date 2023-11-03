/** requires jQuery $ */
function getTextWithHtmlIndentsCollapsed(jQueryElement) {
  if (!jQueryElement || !jQueryElement.html()) return '';
  const replaceWithWhat = ' ';
  return $(
    jQueryElement.html()
    .replace(/>\s*</g, `>${replaceWithWhat}<`).trim()
  ).text().replace(/\s+/g, ' ').trim();
}
