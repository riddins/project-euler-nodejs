function largestPalindromeProduct (numDigits, verbose = false) {
  const max = parseInt(('9').repeat(numDigits))
  let x = max
  let y = max
  const min = parseInt('9'.repeat(numDigits - 1))
  let maxPalindrome = 0
  let product

  while (x > min) {
    product = x * y
    if (verbose) console.log(`The product of ${x} and ${y} is ${product}`)
    if (isPalindrome(product.toString())) {
      maxPalindrome = product > maxPalindrome ? product : maxPalindrome
      y -= 1
      x = y
    } else if (x === min + 1) {
      y -= 1
      x = y
    } else {
      x -= 1
    }
  }
  return maxPalindrome
}

function isPalindrome (num) {
  const str = num.toString()
  return str.split('').reverse().join('') === str
}

/*
function stepMethodOne (x, y, min) {
  x -= 1
  if (x === min) {
    const numDigits = min.toString().length + 1
    x = parseInt('9'.repeat(numDigits))
    y -= 1
  }

  return {
    x: x,
    y: y
  }
}

function stepMethodTwo (x, y) {
  return x < y ? { x: x, y: y - 1 } : { x: x - 1, y: y }
}
*/

module.exports = {
  largestPalindromeProduct,
  isPalindrome
}
