let ruleThree = 3
let grades = [50, 61, 89, 87, 68, 33]

console.log(grades[0] % 10)

for (let i = 0; i < grades.length; i++) {
  let lastValue = grades[i] % 10

  if (lastValue === 5 || lastValue === 0) {
    console.log("we can't round this up because this is already rounded up", grades[i])
  }
  else if (grades[i] < 38) {
    console.log("you are low mark mate sorry ")
  }
  else {
    console.log("wait let me do this wait")
  }

}

