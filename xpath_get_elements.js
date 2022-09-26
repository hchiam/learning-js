function getElementsByXPath(xpath) {
  var iterator = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.ORDERED_NODE_ITERATOR_TYPE,
    null
  );

  var elements = [];
  var element = null;
  while ((element = iterator.iterateNext())) {
    elements.push(element);
  }

  return elements;
}
