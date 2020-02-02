/*
https://projecteuler.net/problem=1

Multiples of 3 and 5

Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

const multiples = require('./001-multiples-of-3-and-5.js')
test('Natural numbers below 10 that are multiples of 3 or 5 have a sum of 23', () => {
  expect(multiples(10)).toBe(23)
})

test('Natural numbers below 1000 that are multiples of 3 or 5 have a sum of 233168', () => {
  expect(multiples(1000)).toBe(233168)
})
