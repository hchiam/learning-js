function getTextOfDirectChildren(element) {
  return [...element.childNodes]
    .filter((x) => x.nodeType === Node.TEXT_NODE)
    .map((x) => x.textContent)
    .join("");
}

function getTextOfDirectChildren_jQuery(element) {
  return element
    .contents()
    .filter(function () {
      return this.nodeType === Node.TEXT_NODE;
    })
    .text();
}
