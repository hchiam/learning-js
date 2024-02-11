console.log(
  `some %cfancy%c text`,
  "font-size: 15px; background: green; color: white;",
  "all: reset;"
);
// NOTE: the 2nd %c requires explicit styles in Chrome (Firefox seems to assume reset)
