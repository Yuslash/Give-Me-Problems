let operator = "+"
let setOperator = false

if (setOperator) {
  operator = "-"
}

let roman = [5, 3, 4, 1, 6, 7, 2, 1]

for (let i = 0; i < roman.length; i++) {
  for (let j = 0; j < roman.length; j++) {
    if (roman[i] < roman[j]) {
      setOperator = true
    } else {
      setOperator = false
    }
  }

  if (setOperator) {
    operator = "-"
  } else {
    operator = "+"
  }

  console.log(operator)

}

