var mediaStylesOfStyleSheet1 = [...document.styleSheets[0].cssRules]
  .filter((x) => x.media)
  .map((x) => x.cssText)
  .join("\n\n");

var mediaPrintStylesOfStyleSheet1 = [...document.styleSheets[0].cssRules]
  .filter((x) => x.media && x.conditionText.includes("print"))
  .map((x) => x.cssText)
  .join("\n\n");
