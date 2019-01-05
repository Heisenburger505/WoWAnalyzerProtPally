/**
 * Recursive formula for calculating the PMF (probability mass function) of Poisson's Binomial Distribution
 * @param k {Number} Number of desired positive outcomes
 * @param j {Number} Number of total tries
 * @param p {[Number]} Probability vector
 * @param lookup {Array} Lookup table
 * @returns {Number} Probability
 */
function Ekj(k, j, p, lookup) {
  if (k === -1) {
    return 0;
  }
  if (k === j+1) {
    return 0;
  }
  if (k === 0 && j === 0) {
    return 1;
  }
  if (lookup[k][j] !== null) {
    return lookup[k][j];
  }
  // literature uses 1-based indices for probabilities, as we're using an array, we have to use 0 based
  const value = (1 - p[j-1]) * Ekj(k, j-1, p, lookup) + p[j-1] * Ekj(k-1, j-1, p, lookup);
  lookup[k][j] = value;
  return value;
}

// Poisson's Binomial Distribution
// Methods based on Wikipedia page and this research paper:
// // https://www.researchgate.net/publication/257017356_On_computing_the_distribution_function_for_the_Poisson_binomial_distribution

/**
 * Calculates the probability that out of n tries with p probabilities, we get exactly k positive outcomes
 * @param k {Number} Number of desired positive outcomes
 * @param n {Number} Number of total tries
 * @param p {[Number]} Probability vector
 */
export function poissonBinomialPMF(k, n, p) {
  // denoted in the paper as ξk, I'll call it Ek for simplicity
  // using the recursive formula in chapter 2.5
  if (p.length !== n) {
    throw new Error("You must supply a probability vector with the same length as the number of total tries into Poisson Binomial PMF");
  }
  // Using a lookup table to simplify recursion a little bit
  // construct an (n+1) x (n+1) lookup table (because Ek,j uses indexes from 0 to n INCLUSIVE, with this we don't have to subtract indexes all the time)
  // intentionally set tu nulls so we know which values are computed or not
  const lookup = [...Array(n+1)].map(_ => Array(n + 1).fill(null));
  return Ekj(k, n, p, lookup);
}

/**
 * Calculates the probability that out of n tries with p probabilities, we get less than or equal k positive outcomes
 * @param k {Number} Number of desired positive outcomes
 * @param n {Number} Number of total tries
 * @param p {[Number]} Probability vector
 */
export function poissonBinomialCDF(k, n, p) {
  // While technically equal to summing Ei from i = 0 to k, since we use recursion, a better solution is a lookup table
  if (p.length !== n) {
    throw new Error("You must supply a probability vector with the same length as the number of total tries into Poisson Binomial CDF");
  }
  // see comments in poissonBinomialPMF
  const lookup = [...Array(n+1)].map(_ => Array(n+1).fill(null));
  let probability = 0;
  // since Ekj uses the values from "previous row" (Ekj(k - 1, j - 1, ...)), it's better to iterate from 0
  // this way, it produces the least necessary amount of calculations with the lookup table (only the Ekj(k, j - 1) parts)
  for (let i = 0; i <= k; i++) {
    probability += Ekj(i, n, p, lookup);
  }
  // For practical reasons, return the lookup table as well, as there should exist PMF values for k <= k (as in argument of this function)
  // this is practical for showing a chart like emallson has
  return {
    probability,
    lookup,
  };
}
