/**
 * Example usage:
 *
 * const element = document.querySelector('some selector');
 * findAllAncestorsBreakingFixedDescendants(element);
 */
function findAllAncestorsBreakingFixedDescendants(element) {
  if (!element) return [];

  const results = [];

  let parent = element.parentElement;
  while (parent) {
    const { transform, willChange } = getComputedStyle(parent);
    if (transform !== "none" || willChange === "transform") {
      console.warn(
        {
          transform,
          willChange,
        },
        parent
      );
      results.push(parent);
    }
    parent = parent.parentElement;
  }

  return results;
}
