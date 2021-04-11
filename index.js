function calculate(numberOne, operation, numberTwo) {
  switch (operation) {
    case '+':
      return numberOne + numberTwo
    case '-':
      return numberOne - numberTwo
    case '*':
      return numberOne * numberTwo
    case '/':
      return numberOne / numberTwo
    default:
      return 'Operation not yet supported. You sent ' + operation
  }
}
console.log(calculate(5 + 5))
module.exports = { calculate }
