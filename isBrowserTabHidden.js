/**
 * @returns whether current page/tab is hidden
 */
function isBrowserTabHidden() {
  const props = getTabVisibilityProps();
  return props.hidden && document[props.hidden];
}

/**
 * https://www.algoexpert.io/blog/we-launched-a-new-feature-except-no
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
 *
 * @returns {object} {hidden, visibilityChange event name}
 */
function getTabVisibilityProps() {
  if (typeof document.hidden !== "undefined") {
    return {
      hidden: "hidden",
      visibilityChange: "visibilitychange",
    };
  } else if (typeof document.msHidden !== "undefined") {
    return {
      hidden: "msHidden",
      visibilityChange: "msvisibilitychange",
    };
  } else if (typeof document.webkitHidden !== "undefined") {
    return {
      hidden: "webkitHidden",
      visibilityChange: "webkitvisibilitychange",
    };
  }
  return {
    hidden: null,
    visibilityChange: null,
  };
}

module.exports = {
  isBrowserTabHidden,
  getTabVisibilityProps,
};
