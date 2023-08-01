javascript: (() => {
  if (document.body.classList.contains("zen")) {
    document.body.classList.remove("zen");
    document.body.removeAttribute("inert");
  } else {
    document.body.classList.add("zen");
    document.body.setAttribute("inert", true);
  }
  if (!document.querySelector("style").innerText.includes(".zen {")) {
    document.querySelector("style").innerText += `.zen {
      --bannerHeight: 0;
      --topNavigationHeight: 0;
      --leftSidebarWidth: 0;
      --rightSidebarWidth: 0;
    }
    .zen header, .zen [data-testid="issue.views.issue-details.issue-layout.container-right"] * {
      display: none !important;
    }`;
  }
})();
