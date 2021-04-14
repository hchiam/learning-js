javascript: (function () {
  var iframe = document.querySelector(".activity-iframe");
  var iframeDoc = iframe.contentDocument
    ? iframe.contentDocument
    : iframe.contentWindow.document;
  console.log(
    Array.from(iframeDoc.querySelectorAll("li"))
      .map((x) => x.querySelectorAll("p"))
      .filter((x) => x.length)
      .map((x) => x.innerText?.trim())
  );
})();
