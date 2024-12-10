let ruleThree = 3
let grades = [50, 61, 89, 87, 68, 33]

console.log(grades[0] % 10)

for (let i = 0; i < grades.length; i++) {
  let lastValue = grades[i] % 10
  let addingValue = grades[i] + 2

  if (lastValue === 5 || lastValue === 0) {
    console.log("we can't round this up because this is already rounded up", grades[i])
  }
  else if (grades[i] < 38) {
    console.log("you are low mark mate sorry ")
  }
  else if (addingValue % 10 === 5 || addingValue % 10 === 0) {
    console.log("your marks can be rouneded up", grades[i])
  }
  else {
    console.log("wait let me do this wait")
  }

}

