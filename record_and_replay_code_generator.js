// UPDATE: see Chrome DevTools recorder feature

// to-do: how to handle non-unique selector? detect and then what?

// requires jQuery:

(function () {
  console.log("Code generated from actions array assumes jQuery available.");

  window.actions = []; // [{selector, value}];

  Array.from(document.querySelectorAll("*")).forEach((e) =>
    e.addEventListener("change", handleChangesInAnyElement)
  );

  function handleChangesInAnyElement(e) {
    var isUserGenerated = e.isTrusted;
    if (!isUserGenerated) return;

    var wasTriggeredOnThisElement = e.target === this;
    if (!wasTriggeredOnThisElement) return;

    var elementThatChanged = this;

    var isHidden =
      elementThatChanged.style.visibility === "hidden" ||
      elementThatChanged.style.display === "none";
    if (isHidden) return;

    var el = elementThatChanged;
    var tagName = el.tagName || el.getAttribute("tagName");

    var thisSelector =
      (tagName ? tagName : "") +
      (el.getAttribute("id") ? "#" + el.getAttribute("id") : "") +
      (el.getAttribute("class")
        ? "." + el.getAttribute("class").split(" ").join(".")
        : "");

    var selector =
      Array.from(getParents(elementThatChanged))
        .map(
          (x) =>
            x.tagName +
            (x.id ? "#" + x.id : "") +
            (x.className.trim()
              ? "." + x.className.trim().split(" ").join(".")
              : "")
        )
        .reverse()
        .join(">") +
      ">" +
      thisSelector;

    if (!selector) return;

    var { selector, index } = getActiveOneOnly(selector, elementThatChanged);
    var value = elementThatChanged.value;
    var action = { selector, value };
    if (index !== undefined) action.index = index;

    console.log(action);
    window.actions.push(action);
  }

  function getParents(el, parentSelectorStopAt) {
    if (parentSelectorStopAt === undefined) {
      parentSelectorStopAt = document.body;
    }

    var parents = [];
    var p = el.parentNode;

    while (p !== parentSelectorStopAt) {
      var o = p;
      parents.push(o);
      p = o.parentNode;
    }

    if (parentSelectorStopAt) parents.push(parentSelectorStopAt);
    return parents;
  }

  function getActiveOneOnly(selector, elementThatChanged) {
    var index = 0;

    var results = document.querySelectorAll(selector);
    var isUnique = results && results.length < 2;
    if (isUnique) return { selector };

    Array.from(results).filter((x, i) => {
      var isActiveElement = x === elementThatChanged;
      if (isActiveElement) {
        index = i;
      }
      return isActiveElement;
    });

    return { selector, index };
  }

  window.convertActionsToCode = convertActionsToCode;
  function convertActionsToCode(actions) {
    console.log("Code generated from actions array assumes jQuery available.");
    return actions
      .map(
        (x) =>
          `$('${x.selector}')${
            x.index ? ".get(" + (x.index + 1) + ")" : ""
          }.click().val('${x.value}').change()`
      )
      .join(";");
  }

  console.log(
    `%cChanges to visible inputs will now be recorded in the %cactions%c array.
You can copy runnable code to clipboard by running
%ccopy(convertActionsToCode(actions));%c
in the browser console.`,
    "",
    "color: lime; background: black;",
    "",
    "color: lime; background: black;",
    ""
  );
})();
