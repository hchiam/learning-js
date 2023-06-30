(function () {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const is = (hostname) => hostname === location.hostname;

  if (is("www.google.com")) {
    setTimeout(() => {
      const isEn = $("[lang]").lang.split("-")[0] == "en";
      if (!isEn) {
        const linksWithTbm = [...$$("[href*=tbm]")];
        linksWithTbm.forEach((link) => {
          if (!link.title) {
            const tbm = new URLSearchParams(link.href).get("tbm");
            link.title = tbm;
          }
        });
        const topNavSearchChips_https = [...$$('[role="navigation"]')]
          ?.filter((x) => getComputedStyle(x).visibility === "visible")?.[0]
          ?.querySelectorAll('a[href*="https"]');
        topNavSearchChips_https?.forEach((link) => {
          if (
            !link.title &&
            !link.innerText?.toLowerCase() !== url?.pathname?.replace("/", "")
          ) {
            const url = new URL(link.href);
            link.title = url.hostname + url.pathname;
          }
        });
      }
    }, 2000);
  }
})();