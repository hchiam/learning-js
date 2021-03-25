// to-do: how to handle non-unique selector? detect and then what?

// requires jQuery:

var actions = []; // [{selector, value}];

$("*").on("change", listenToChangesInAnyElement);

function listenToChangesInAnyElement(e) {
  var isUserGenerated = e.originalEvent;
  if (!isUserGenerated) return;

  var wasTriggerdOnThisElement = e.target == this;
  if (!wasTriggerdOnThisElement) return;

  var elementThatChanged = $(this);

  var isHidden = elementThatChanged.is(":hidden");
  if (isHidden) return;

  var el = elementThatChanged;

  var thisSelector =
    el.prop("tagName") +
    (el.prop("id") ? "#" + el.prop("id") : "") +
    (el.prop("class") ? "." + el.prop("class").split(" ").join(".") : "");

  selector =
    Array.from(elementThatChanged.parents())
      .map(
        (x) =>
          x.tagName +
          (x.id ? "#" + x.id : "") +
          (x.className ? "." + x.className.split(" ").join(".") : "")
      )
      .reverse()
      .join(">") +
    ">" +
    thisSelector;

  var value = elementThatChanged.val();

  if (!selector) return;

  var action = { selector, value };
  console.log(action);
  actions.push(action);
}

function convertActionsToCode(actions) {
  return actions
    .map((x) => `$('${x.selector}').click().val('${x.value}').change()`)
    .join(";");
}
