let grade = 89
let gradesLastDigit = grade % 10

let gapToNextMultiplyOf5 = 5 - gradesLastDigit

let nextMulitplyOf5 = grade + gapToNextMultiplyOf5

console.log(gapToNextMultiplyOf5, gradesLastDigit, nextMulitplyOf5)
