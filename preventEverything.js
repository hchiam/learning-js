// https://web.dev/eventing-deepdive/

function preventEverything(e) {
  e.preventDefault(); // prevent default action
  e.stopPropagation(); // stop from further propagating down capture phase (if applicable) and/or propagating up bubble phase
  e.stopImmediatePropagation(); // stop other later-added listeners of same event type from firing
}

document.addEventListener("click", preventEverything, true);
document.addEventListener("keydown", preventEverything, true);
document.addEventListener("mousedown", preventEverything, true);
document.addEventListener("contextmenu", preventEverything, true);
document.addEventListener("mousewheel", preventEverything, {
  capture: true,
  passive: false,
});
