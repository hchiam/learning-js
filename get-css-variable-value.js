/*
example:

:root {
  --brand-color: red;
}

.something {
  background: var(--brand-color);
}

 */

var cssVariableName = "--brand-color";

getComputedStyle(document.body).getPropertyValue(cssVariableName).trim();
