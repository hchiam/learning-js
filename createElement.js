function createElement(
  tagName,
  text,
  parent,
  attributes = [{ name: "", value: "" }]
) {
  var node = document.createElement(tagName);
  if (text) {
    var textNode = document.createTextNode(text);
    node.appendChild(textNode);
  }
  if (attributes && attributes.length) {
    attributes.forEach((attribute) => {
      if (attribute.name) {
        node.setAttribute(attribute.name, attribute.value);
      }
    });
  }
  if (parent) {
    parent.appendChild(node);
  }
  return node;
}
