
function largestPrimeFactor (num) {
  let i = 1
  let factor
  while (i <= num) {
    if (num % i === 0) {
      factor = num / i
      if (isPrime(factor)) {
        break
      }
    }
    i++
  }
  return factor
}

function isPrime (num) {
  let i = 2
  while (i < num) {
    if (num % i === 0) break
    i++
  }
  return i === num
}

module.exports = {
  largestPrimeFactor,
  isPrime
}
