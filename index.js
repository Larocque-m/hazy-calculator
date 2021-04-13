/* eslint-disable no-console */
// make function called calculate
const calculate = (arr) => {
  // remove non-numbers or non-operators from arr.
  // two elements or less than 3 should be NaN


  arr.length
  let arr2 = []
  let operand = ['+', '-', '*', '/']

  arr.forEach((item) => {
    if (typeof item === 'string' || typeof item === 'number' || item === null) {
      if (operand.includes(item)) {
        arr2.push(item)
      } else {
        if (item !== ('')) {
          let num = Number(item)

          if (!isNaN(num)) arr2.push(num)
        }
      }
    }
    console.log(item)
  })






  // loop trough the array to pick out on valid numbers and operator in a new array 

  // if (item[i] === null) {
  // return item === 0
  // }


  // if (arr.length < 3) {
  // return NaN
  // }

  // newarr.number and newarr.operator

  // if it is three go through switch statement 

  // have null indexies equate to 0.
  // if operation includes (extra)
  // return true

  // if operation isNAN (extra)
  // return false

  // make stringfield number strings Type coercion to number Types.
  let numberOne = Number(arr2[0])
  let numberTwo = Number(arr2[2])
  let operation = arr2[1]

  // return equation values from switch statement.
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


module.exports = calculate
