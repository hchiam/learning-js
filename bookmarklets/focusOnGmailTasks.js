javascript: (() => {
  const tasksContainer = document.querySelector(".bq9");
  const show = tasksContainer.previousSibling.inert;
  tasksContainer.previousSibling.inert = !show;
  tasksContainer.previousSibling.style.visibility = show ? "visible" : "hidden";
  tasksContainer.style.left = show
    ? ""
    : `calc(50% - ${tasksContainer.offsetWidth}px / 2)`;
})();
