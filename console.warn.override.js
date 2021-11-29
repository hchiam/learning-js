const { isInDeveloperMode } = require("./isInLocalhostDeveloperMode");

const oldConsoleWarn = window.console.warn;
window.console.warn = function () {
  if (isInDeveloperMode()) {
    oldConsoleWarn(...arguments);
  }
};
