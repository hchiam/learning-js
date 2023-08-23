javascript: (() => {
  console.log(`Open this in a new tab and run the code: 
https://tasks.google.com/embed/?origin=https://mail.google.com&fullWidth=1&amp;lfhs=2`);
  const texts = document.querySelectorAll("[data-task-id]");
  [...texts].map((text) => (text.style.background = ""));
  const i = Math.round(Math.random() * (texts.length - 1));
  texts[i].style.background = "yellow";
  let topLevelTask = texts[i].parentElement.previousSibling;
  while (topLevelTask.querySelector("[data-parent-task-id]")) {
    topLevelTask = topLevelTask.previousSibling;
  }
  topLevelTask.scrollIntoView();
})();
