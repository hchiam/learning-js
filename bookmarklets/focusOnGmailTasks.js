javascript: (() => {
  const tasksContainer = document.querySelector(
    `div:has(> div[role="navigation"]):has(iframe[src^="https://tasks.google.com"]) > div:has(iframe[src^="https://tasks.google.com"])`
  );
  const siblings = [...tasksContainer.parentElement.children].filter(
    (x) => x !== tasksContainer
  );
  const show = siblings.at(-1).inert;
  siblings.forEach((sibling) => {
    sibling.inert = !show;
    sibling.style.visibility = show ? "visible" : "hidden";
  });
  tasksContainer.parentElement.previousElementSibling.inert = !show;
  tasksContainer.parentElement.previousElementSibling.style.visibility = show
    ? "visible"
    : "hidden";
  const otherJsactionContainers = tasksContainer.querySelectorAll(
    'div[jsaction] > div[jsaction]:not(:has(iframe[src^="https://tasks.google.com"]))'
  );
  otherJsactionContainers.forEach((otherContainer) => {
    otherContainer.inert = !show;
    otherContainer.style.visibility = show ? "visible" : "hidden";
  });
  tasksContainer.parentElement.previousElementSibling.inert = !show;
  tasksContainer.parentElement.previousElementSibling.style.visibility = show
    ? "visible"
    : "hidden";
  tasksContainer.style.left = show
    ? ""
    : `calc(50% - ${tasksContainer.offsetWidth}px / 2)`;
  tasksContainer.style.position = show ? "" : "fixed";
})();
