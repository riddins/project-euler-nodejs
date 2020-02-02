function eFib (maxValue) {
  var priorTerm = 1
  var currentTerm = 2
  var newTerm = priorTerm + currentTerm
  var sumEven = 2

  while (newTerm <= maxValue) {
    if (newTerm % 2 === 0) sumEven += newTerm
    priorTerm = currentTerm
    currentTerm = newTerm
    newTerm = priorTerm + currentTerm
  }

  return maxValue < 2 ? 0 : sumEven
}

module.exports = eFib
