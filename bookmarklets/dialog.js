javascript: (() => {
  const dialog =
    document.querySelector("#example_dialog") ??
    document.createElement("dialog");
  dialog.id = "example_dialog";
  dialog.innerText = "Example Dialog";
  document.body.appendChild(dialog);
  const closeDialogButton =
    dialog.querySelector('button[command="close"]') ??
    document.createElement("button");
  closeDialogButton.command = "close";
  closeDialogButton.setAttribute("commandfor", dialog.id);
  closeDialogButton.innerText = "x";
  closeDialogButton.style.position = "absolute";
  closeDialogButton.style.top = 0;
  closeDialogButton.style.right = 0;
  closeDialogButton.style.borderRadius = "50%";
  closeDialogButton.style.fontSize = "0.75rem";
  closeDialogButton.style.width = "1.25rem";
  closeDialogButton.style.height = "1.25rem";
  closeDialogButton.style.display = "flex";
  closeDialogButton.style.justifyContent = "center";
  closeDialogButton.style.alignItems = "center";
  if (!dialog.querySelector('button[command="close"]')) {
    dialog.appendChild(closeDialogButton);
  }
  if (dialog.open) {
    dialog.close();
  } else {
    dialog.showModal();
  }
})();
