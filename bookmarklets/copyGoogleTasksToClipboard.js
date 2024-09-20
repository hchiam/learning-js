javascript: (() => {
  if (location.host !== "tasks.google.com") {
    window
      .open(
        "https://tasks.google.com/embed/?origin=https://mail.google.com&fullWidth=1&amp;lfhs=2",
        "_blank"
      )
      .focus();
  } else {
    getTasks();
  }
  function getTasks() {
    const tasks = [
      ...document
        .querySelector('[aria-label="Active tasks"]')
        .querySelectorAll("html-blob"),
    ];
    const singleString = tasks
      .map((task) => {
        const isSubtask = task.closest("[data-parent-task-id]");
        const isDescription = task.closest(
          '[data-aria-label="Task description"]'
        );
        let indent = "";
        if (isSubtask) {
          indent += " ▸ ";
        }
        if (isDescription) {
          indent += "     ";
        }
        let linkText = "";
        const emailLink = task
          .closest("[data-task-id]")
          .querySelector("a[aria-label]");
        if (
          !isDescription &&
          emailLink &&
          emailLink.href.startsWith("https://mail.google.com/")
        ) {
          linkText = " " + emailLink.href;
        }
        return indent + task.innerText + linkText;
      })
      .join("\n\n");
    copy(singleString);
  }
  function copy(text) {
    var textarea = document.createElement("textarea");
    selection = document.getSelection();
    textarea.textContent = text;
    document.body.appendChild(textarea);
    selection.removeAllRanges();
    textarea.select();
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(textarea);
    console.log(`Copied to clipboard:\n\n${text}`);
    alert(`Copied to clipboard:\n\n${text}`);
  }
})();
