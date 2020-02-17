function largestPalindromeProduct (numDigits) {
  let x = parseInt(('9').repeat(numDigits))
  let y = x
  const min = parseInt('9'.repeat(numDigits - 1))
  let product

  while (x > min) {
    product = x * y
    console.log(`The product of ${x} and ${y} is ${product}`)
    if (isPalindrome(product.toString())) break
    ({ x, y } = stepMethod(x, y, min))
  }
  return (x > min) ? (x * y) : -1
}

function isPalindrome (num) {
  const str = num.toString()
  return str.split('').reverse().join('') === str
}

function stepMethod (x, y, min) {
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

module.exports = {
  largestPalindromeProduct,
  isPalindrome
}
