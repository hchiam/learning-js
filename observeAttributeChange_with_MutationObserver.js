// i don't recommend actually using this code as it might slow your browser down a lot
// see bookmarklets/preventOutlookRedDotOnBrowserTab.js

const faviconLink = document.querySelector(`link[rel~="icon"]`);

observeAttributeChange(faviconLink, callback);

function callback(mutation) {
  setBrowserTabFavicon(
    "https://res.cdn.office.net/owamail/20240105004.01/resources/images/favicons/mail-seen.ico"
  );
}

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

function observeAttributeChange(element, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const targetElement = mutation.target;
      if (mutation.type === "attributes") {
        if (callback) callback(mutation);
      }
    });
  });

  observer.observe(element, {
    attributes: true,
  });
}
