/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const tst = require('./004-largest-palindrome-product')
test('The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.', () => {
  expect(tst.largestPalindromeProduct(2)).toBe(9009)
})

test('989 is palindrome', () => {
  expect(tst.isPalindrome(989)).toBe(true)
})

test('988 is not palindrome', () => {
  expect(tst.isPalindrome(988)).toBe(false)
})
