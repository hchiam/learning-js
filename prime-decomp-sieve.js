/**
 * 12 = 2 * 2 * 3
 */
function primeDecompositionUsingSieveOfEratosthenes(n) {
  let factor = 2;
  const primeFactors = [];

  // modify n while increasing the value of factor:
  while (n >= factor ** 2) {
    console.log(n, factor);
    const isAPrimeFactor = n % factor === 0;
    if (isAPrimeFactor) {
      primeFactors.push(factor);
      n /= factor;
    } else {
      factor++;
    }
  }
  console.log(n, factor);

  // one more time because the factor will be > n at the last step since n shrank:
  primeFactors.push(n);

  return primeFactors;
}

exampleUsage();
function exampleUsage() {
  console.log(primeDecompositionUsingSieveOfEratosthenes(12));
}
