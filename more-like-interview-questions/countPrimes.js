// Great, well-written hints: https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    // initialize:
    let isPrime = [];
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i < n; i++) {
        isPrime[i] = true;
    }
    // 2, 3, 4, 5
    // (use i * i instead of sqrt(n) because sqrt is expensive)
    for (let i = 2; i * i < n; i++) { // stop checking "left factors" at sqrt(n)
        if (!isPrime[i]) continue; // don't bother repeat checking multiples of known non-primes
        for (let j = i * i; j < n; j += i) {
            // i^2: don't bother checking "left" * "smaller"; already covered by "smaller" * "smaller"
            // "sieve" multiples of "left factors"
            isPrime[j] = false;
        }
    }
    // count primes under n:
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};
