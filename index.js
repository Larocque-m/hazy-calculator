
const calculate = (arr) => {
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
  })



  let numberOne = Number(arr2[0])
  let numberTwo = Number(arr2[2])
  let operation = arr2[1]


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
      return NaN
  }
}


module.exports = calculate
