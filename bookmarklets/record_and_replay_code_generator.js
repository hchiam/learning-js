javascript: (function () {
  console.log("Code generated from actions array assumes jQuery available.");

  window.actions = [];

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
    var tagName = el.getAttribute("tagName");

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

    if (!isUnique(selector)) {
      console.warn("Non-unique selector! " + selector);
    }

    var value = elementThatChanged.value;
    var action = { selector, value };
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

  function isUnique(selector) {
    var results = document.querySelectorAll(selector);
    return results && results.length < 2;
  }

  window.convertActionsToCode = convertActionsToCode;
  function convertActionsToCode(actions) {
    console.log("Code generated from actions array assumes jQuery available.");
    return actions
      .map((x) => `$('${x.selector}').click().val('${x.value}').change()`)
      .join(";");
  }

  console.log(
    `%25cChanges to visible inputs will now be recorded in the %25cactions%25c array.
You can copy runnable code to clipboard by running
%25ccopy(convertActionsToCode(actions));%25c
in the browser console.`,
    "",
    "color: lime; background: black;",
    "",
    "color: lime; background: black;",
    ""
  );
})();
