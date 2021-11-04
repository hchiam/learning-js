javascript: (function () {
  const toReview = Array.from(
    document.querySelectorAll(
      '[title*="Review"],[data-original-title*="Review"]'
    )
  );
  toReview.map((x) => {
    x.style.background = "red";
  });
  alert(`${toReview.length} to review! :)`);
})();
