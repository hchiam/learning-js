// example use: const computedStyles = getComputedStyles(document.querySelector('.shepherd-target'));
function getComputedStyles(element) {
  const computedStylesMap = window.getComputedStyle(element, null);
  const computedStyles = {};
  for (let i = 0; i < computedStylesMap.length; i++) {
    const property = computedStylesMap.item(i);
    const propertyValue = computedStylesMap.getPropertyValue(property);
    let camelCaseProperty = '';
    for (let j = 0; j < property.length; j++) {
      if (property[j] === '-' && j === 0) {
        j++;
        camelCaseProperty += property[j];
      } else if (property[j] === '-' && j > 0) {
        j++;
        camelCaseProperty += property[j].toUpperCase();
      } else {
        camelCaseProperty += property[j];
      }
    }
    computedStyles[camelCaseProperty] = propertyValue;
  }
  return computedStyles;
}
