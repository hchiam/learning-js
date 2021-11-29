const { isInDeveloperMode } = require("./isInLocalhostDeveloperMode");

const oldConsoleWarn = console.warn;
console.warn = function () {
  if (isInDeveloperMode()) {
    oldConsoleWarn(...arguments);
  }
};
