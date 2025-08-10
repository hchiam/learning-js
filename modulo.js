/** In JavaScript, -1%4=-1. This helper function makes it return 3 (always non-negative) instead,
 * so we can continue the pattern into the negatives:
 * 4%4=0
 * 3%4=3
 * 2%4=2
 * 1%4=1
 * 0%4=0
 * -1%4=3, not -1
 * -2%4=2, not -2
 * -3%4=1, not -3
 * -4%4=0, not -4
 * -5%4=3, not -5
 *
 * range:[0,3] or [0,4)
 */
function mod(n, max) {
  return ((n % max) + max) % max;
}

/**
 * range:[-4,3] or [-4,4)
 *
 * moduloInRange(8,-4,4)=0
 * moduloInRange(7,-4,4)=-1
 * moduloInRange(6,-4,4)=-2
 * moduloInRange(5,-4,4)=-3
 * moduloInRange(4,-4,4)=-4
 * moduloInRange(3,-4,4)=3
 * moduloInRange(2,-4,4)=2
 * moduloInRange(1,-4,4)=1
 * moduloInRange(0,-4,4)=0
 * moduloInRange(-1,-4,4)=-1
 * moduloInRange(-2,-4,4)=-2
 * moduloInRange(-3,-4,4)=-3
 * moduloInRange(-4,-4,4)=-4
 * moduloInRange(-5,-4,4)=3
 */
function moduloInRange(n, min, max) {
  return mod(n - min, max - min) + min;
}
