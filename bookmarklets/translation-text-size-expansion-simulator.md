<!-- View on GitHub to get the convenient copy-to-clipboard button: -->

# Hover over the code to see the copy-to-clipboard button:

![animation showing how to hover to get the copy-to-clipboard button](copy-code-to-clipboard.gif)

```js
javascript:(function(){
const settings = {
  expanded: true,
  predictableMode: false,
};

const accents = %22̟́%22;

console.log(
  %22Reference expansion table: https:%2F%2Fwww.w3.org%2FInternational%2Farticles%2Farticle-text-size%22
);

alert(
  'Use the Ctrl key to toggle. \n\nHit the %22p%22 key to toggle %22predictable mode%22.'
);

englishToExpectedEuropeanLanguageExpansionSize();

document.body.addEventListener(%22keydown%22, function (event) {
  if (event.ctrlKey) {
    settings.expanded = !settings.expanded;
    if (settings.expanded) {
      englishToExpectedEuropeanLanguageExpansionSize();
    } else {
      backToEnglishSize();
    }
  } else if (event.key === %22p%22 || event.key === %22P%22) {
    settings.predictableMode = !settings.predictableMode;
    if (settings.predictableMode) {
      alert(%22Spaces will NOT be randomly included.%22);
    } else {
      alert(%22Spaces WILL be randomly included.%22);
    }
  }
});

function englishToExpectedEuropeanLanguageExpansionSize() {
  const elementsWithText = [...document.querySelectorAll(%22body *%22)]
    .filter((el) => hasText(el))
    .reverse();
  elementsWithText.forEach((el) => setExpandedSizeText(el));
}

function backToEnglishSize() {
  const elementsWithText = [...document.querySelectorAll(%22body *%22)]
    .filter((el) => hasText(el))
    .reverse();
  elementsWithText.forEach((el) => setEnglishSizeText(el));
}

function hasText(element) {
  return (
    element.innerText && element.innerText.trim() && hasChildTextNode(element)
  );
}

function hasChildTextNode(element) {
  return [...element.childNodes].some((n) => n.nodeType === Node.TEXT_NODE);
}

function setEnglishSizeText(element) {
  const elementData = element.getAttribute(
    %22data-englishToExpectedEuropeanLanguageExpansionSize%22
  );
  if (elementData) {
    const originalLength = JSON.parse(elementData).originalLength;
    const expandedLength = JSON.parse(elementData).expandedLength;
    const difference = expandedLength - originalLength;
    const multiplier = 1 + accents.length;
    element.innerHTML = element.innerHTML.slice(0, -difference * multiplier);
  }
}

function setExpandedSizeText(element) {
  const elementData = element.getAttribute(
    %22data-englishToExpectedEuropeanLanguageExpansionSize%22
  );
  const alreadyExpanded =
    elementData ||
    element.querySelectorAll(
      %22[data-englishToExpectedEuropeanLanguageExpansionSize]%22
    ).length;
  if (alreadyExpanded) {
    if (
      element.hasAttribute(
        %22data-englishToExpectedEuropeanLanguageExpansionSize%22
      )
    ) {
      const originalLength = JSON.parse(elementData).originalLength;
      const expandedLength = JSON.parse(elementData).expandedLength;
      element.innerHTML = element.innerHTML.slice(0, originalLength);
      element.innerHTML += getExpandedString(expandedLength - originalLength);
    }
  } else {
    const originalHtmlLength = element.innerHTML.length;
    const originalLength = element.innerText.trim().length;
    const expandedLength = useExpansionTable(element.innerText.trim());
    const difference = expandedLength - originalLength;
    element.innerHTML += getExpandedString(difference);
    const data = {
      originalLength: originalHtmlLength,
      expandedLength: originalHtmlLength + difference,
    };
    element.setAttribute(
      %22data-englishToExpectedEuropeanLanguageExpansionSize%22,
      JSON.stringify(data)
    );
  }
}

function useExpansionTable(englishText) {
  let expandedLength = englishText.length;
  if (englishText.length <= 10) {
    expandedLength = englishText.length * 3;
  } else if (englishText.length <= 20) {
    expandedLength = englishText.length * 2;
  } else if (englishText.length <= 30) {
    expandedLength = englishText.length * 1.8;
  } else if (englishText.length <= 50) {
    expandedLength = englishText.length * 1.6;
  } else if (englishText.length <= 70) {
    expandedLength = englishText.length * 1.7;
  } else if (englishText.length > 70) {
    expandedLength = englishText.length * 1.3;
  }
  return Math.ceil(expandedLength);
}

function getExpandedString(length) {
  let output = %22%22;
  const abc = %22abcdefghijklmnopqrstuvwxyz%22;
  const chanceOfSpace = settings.predictableMode ? 0 : 0.1;
  let i = 0;
  while (i < length) {
    const notLastCharacter = i < length - 1;
    const precededBySpace = i > 0 && output[i - 1] === %22 %22;
    if (
      notLastCharacter &&
      !precededBySpace &&
      Math.random() >= 1 - chanceOfSpace
    ) {
      output += %22 %22 + accents;
    } else {
      output += abc[i %25 26] + accents;
    }
    i++;
  }
  return output;
}

})();
```

https://github.com/hchiam/learning-js/blob/main/bookmarklets/translation-text-size-expansion-simulator.js
