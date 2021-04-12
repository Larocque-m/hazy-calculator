/* eslint-disable no-console */


// make function called calculate
// have null indexies equate to 0.
// make stringfield number strings Type coercion to number Types.
// loop through array and remove non-numbers from it.
// return equation values from switch statement.

const calculate = (numberOne, operation, numberTwo) => {
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
    // invalid data point return NAN  
    return NaN
  }
}

console.log(calculate(4 + 5))
module.exports = { calculate }
