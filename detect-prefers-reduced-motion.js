/**
 * Detects whether the user has the "reduce motion" setting turned on,
 * or defaults to reduced motion for older browsers that don't support prefers-reduced-motion.
 */
function prefersReducedMotion() {
  return (
    !window.matchMedia ||
    !window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  );
  // note the "!"
}
