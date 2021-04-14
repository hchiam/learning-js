javascript: (function () {
  Array.from(document.querySelectorAll("#readme details")).map((d) =>
    d.setAttribute("open", true)
  );
})();
