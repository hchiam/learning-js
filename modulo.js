/** In JavaScript, -1%4=-1. This helper function makes it return 3 (always non-negative) instead: */
function mod(n, max) {
  return ((n % max) + max) % max;
}
