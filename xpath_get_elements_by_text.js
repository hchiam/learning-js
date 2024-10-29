function getElementsByText(text) {
  return getElementsByXPath(`//*[text()='${text}']`); // see getElementsByXPath below
}


// https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate

// EXAMPLE:
// var xpath = "//p[contains(text(),'Some text contained in a p tag')]";
var xpath =
  "//*[contains(@class, 'kix-appview-editor-container')]//*[contains(text(),'some text')]";
var elements = getElementsByXPath(xpath);
console.log(elements);

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

function getElementsByTextInGoogleDocInFirefox(text) {
  var xpath =
    "//*[contains(@class, 'kix-appview-editor-container')]//*[contains(@class, 'kix-lineview') and contains(.//span, '" +
    text +
    "')]"; // "/parent::span/parent::div/parent::div[contains(@class, 'kix-lineview')]";
  return getElementsByXPath(xpath);
}
