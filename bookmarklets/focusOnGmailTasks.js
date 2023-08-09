javascript: (() => {
  const show = document.querySelector(".bq9").previousSibling.inert;
  document.querySelector(".bq9").previousSibling.inert = !show;
  document.querySelector(".bq9").previousSibling.style.visibility = show
    ? "visible"
    : "hidden";
})();
