function $(x) {
  return document.querySelector(x);
}

const alertDialog = $("dialog#alert");
const confirmDialog = $("dialog#confirm");
const confirmYesButton = confirmDialog.querySelector(".confirm-yes");
const confirmNoButton = confirmDialog.querySelector(".confirm-no");

function alert(text) {
  alertDialog.querySelector("p").innerText = text;
  alertDialog.showModal();
}

let onConfirmClose = (isYes) => {};
function confirm(text, onClose = (isYes) => {}) {
  confirmDialog.querySelector("p").innerText = text;
  confirmDialog.showModal();
  onConfirmClose = onClose;
}

confirmDialog.addEventListener("close", () => {
  onConfirmClose?.(confirmDialog.returnValue === "true");
});

confirmYesButton.addEventListener("click", () => {
  confirmDialog.close("true");
});

confirmNoButton.addEventListener("click", () => {
  confirmDialog.close("false");
});
