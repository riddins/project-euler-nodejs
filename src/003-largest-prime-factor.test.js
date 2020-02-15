/*
https://projecteuler.net/problem=3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const myMethods = require('./003-largest-prime-factor')
test('The prime factors of 13195 are 5, 7, 13 and 29.', () => {
  expect(myMethods.largestPrimeFactor(13195)).toBe(29)
})

test('The largest prime factor of 6 is 3.', () => {
  expect(myMethods.largestPrimeFactor(6)).toBe(3)
})

test('The number 3 is prime', () => {
  expect(myMethods.isPrime(3)).toBe(true)
})

test('The number 4 is not prime', () => {
  expect(myMethods.isPrime(4)).toBe(false)
})
