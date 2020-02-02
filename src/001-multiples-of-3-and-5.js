function multiples (maxVal) {
  let accum = 0
  for (let i = 0; i < maxVal; i++) {
    if (i % 3 === 0 || i % 5 === 0) accum += i
  }
  return accum
}

module.exports = multiples
