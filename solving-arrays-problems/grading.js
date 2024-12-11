let grades = [50, 61, 89, 87, 68, 33, 73, 83]

for (let i = 0; i < grades.length; i++) {
  let grade = grades[i]
  let lastValue = grade % 10
  let addingValue = lastValue === 9 ? +1 : +2

  if (lastValue === 5 || lastValue === 0) {
    console.log("we can't round this up because this is already rounded up", grades[i])
  }
  else if (grades[i] < 38) {
    console.log("you are low mark mate sorry ")
  } else if ((lastValue + addingValue) % 5 === 0) { // this is the formula grade is 68 + if lastdigit 9 no so +2 so it will be 70 rounded
    // if the grade is 89 then 89 + 1 = 90 % 5 will be 18 so remainder is 0 so if that condition true then it will add that grade + addingValue
    console.log("Your marks can be rounded up to:", grade + addingValue)
  } else {
    console.log("this is values cannot be rounded because to rounded up it should minimum lesser than 3")
  }

}

