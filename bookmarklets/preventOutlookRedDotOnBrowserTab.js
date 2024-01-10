javascript: (() => {
  /* see observeAttributeChange_with_MutationObserver.js */
  const faviconLink = document.querySelector(`link[rel~="icon"]`);

  let interval = setInterval(() => {
    setBrowserTabFavicon(
      "https://res.cdn.office.net/owamail/20240105004.01/resources/images/favicons/mail-seen.ico"
    );
  }, 1000);

  function setBrowserTabFavicon(replacementIcon) {
    var link = document.querySelector(`link[rel~="icon"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href =
      replacementIcon ||
      document.createElement("canvas").toDataURL("image/x-icon");
  }
})();
