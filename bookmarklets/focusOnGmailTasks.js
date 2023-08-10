javascript: (() => {
  const show = document.querySelector(".bq9").previousSibling.inert;
  document.querySelector(".bq9").previousSibling.inert = !show;
  document.querySelector(".bq9").previousSibling.style.visibility = show
    ? "visible"
    : "hidden";
  document.querySelector(".bq9").style.left = show
    ? ""
    : `calc(50% - ${document.querySelector(".bq9").offsetWidth}px / 2)`;
})();
