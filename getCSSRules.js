// to edit CSS rules: https://developer.mozilla.org/en-US/docs/Web/API/CSSRuleList "To edit the underlying rules returned by CSSRule objects, use CSSStyleSheet.insertRule() and CSSStyleSheet.deleteRule(), which are methods of CSSStyleSheet."

console.log(getCssRulesObjects($("h1")));
console.log(getCssRulesArray($("h1")));
console.log(getCssRulesString($("h1")));

function getCssRulesString(el) {
  return getCssRulesArray(el)
    .map((rule) => {
      const [selector, declarations] = rule.split(/\s*[{}]\s*/);
      return `${selector} {
${declarations
  .split(/;\s*/)
  .filter(Boolean)
  .map((d) => "  " + d)
  .join(";\n")}
}`;
    })
    .join("\n");
}

function getCssRulesArray(el) {
  return getCssRulesObjects(el).map((rule) => rule.cssText);
}

function getCssRulesObjects(el) {
  return [...document.styleSheets]
    .map((sheet) =>
      [...sheet.cssRules].filter((rule) => el.matches(rule.selectorText))
    )
    .flat();
}
