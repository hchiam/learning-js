englishToExpectedEuropeanLanguageExpansionSize();

console.log(
  "Reference expansion table: https://www.w3.org/International/articles/article-text-size"
);

function englishToExpectedEuropeanLanguageExpansionSize() {
  const elementsWithText = [...document.querySelectorAll("body *")]
    .filter((el) => hasText(el))
    .reverse();
  elementsWithText.forEach((el) => setExpandedSizeText(el));
}

function hasText(element) {
  return (
    element.innerText && element.innerText.trim() && hasChildTextNode(element)
  );
}

function hasChildTextNode(element) {
  return [...element.childNodes].some((n) => n.nodeType === Node.TEXT_NODE);
}

function setExpandedSizeText(element) {
  const alreadyExpanded =
    element.getAttribute(
      "data-englishToExpectedEuropeanLanguageExpansionSize"
    ) ||
    element.querySelectorAll(
      "[data-englishToExpectedEuropeanLanguageExpansionSize]"
    ).length;
  if (alreadyExpanded) return;

  const originalLength = element.innerText.trim().length;
  const expandedLength = useExpansionTable(element.innerText.trim());

  element.innerHTML += getExpandedString(expandedLength - originalLength);

  const data = {
    originalLength,
    expandedLength,
  };

  element.setAttribute(
    "data-englishToExpectedEuropeanLanguageExpansionSize",
    JSON.stringify(data)
  );
}

function useExpansionTable(englishText) {
  if (englishText.length <= 10) {
    return englishText.length * 3;
  } else if (englishText.length <= 20) {
    return englishText.length * 2;
  } else if (englishText.length <= 30) {
    return englishText.length * 1.8;
  } else if (englishText.length <= 50) {
    return englishText.length * 1.6;
  } else if (englishText.length <= 70) {
    return englishText.length * 1.7;
  } else if (englishText.length > 70) {
    return englishText.length * 1.3;
  }
}

function getExpandedString(length) {
  let output = "";
  const abc = "a̟̋́b̟̋́c̟̋́d̟̋́e̟̋́f̟̋́g̟̋́h̟̋́i̟̋́j̟̋́k̟̋́l̟̋́m̟̋́n̟̋́ő̟́p̟̋́q̟̋́r̟̋́s̟̋́t̟̋́ű̟́v̟̋́w̟̋́x̟̋́y̟̋́z̟̋́";
  let i = 0;
  while (i < length) {
    output += abc[i % 26];
    i++;
  }
  return output;
}
