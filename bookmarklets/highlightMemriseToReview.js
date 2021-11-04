javascript: (function () {
  document.head.querySelector("#highlight_memrise_to_review")?.remove();
  const toReview = Array.from(
    document.querySelectorAll(
      '[title*="Review"],[data-original-title*="Review"]'
    )
  );
  toReview.map((x) => {
    x.style.setProperty("--original-top", x.getBoundingClientRect().top + "px");
    x.style.setProperty(
      "--original-left",
      x.getBoundingClientRect().left + "px"
    );
  });
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style id="highlight_memrise_to_review">
      [title*="Review"],[data-original-title*="Review"] {
        animation: move 2s;
        position: fixed;
        transition: top 0.2s;
        left: var(--original-left);
        background: red;
        z-index: 1000;
        border-radius: 5px;
      }
      
      @keyframes move {
        0% {
          top: 0;
        }
        100% {
          top: var(--original-top);
        }
      }
    </style>`
  );

  setTimeout(() => {
    alert(`${toReview.length} to review! :)`);
  }, 2000);
})();
