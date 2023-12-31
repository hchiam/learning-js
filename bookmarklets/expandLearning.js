javascript: (function () {
  Array.from(document.querySelectorAll(".markdown-body details")).map((d) =>
    d.setAttribute("open", true)
  );
})();
