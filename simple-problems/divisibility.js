var divisibility = function(a) {

  let lastDigit = []

  for (let i = 0; i < a.length; i++) {
    lastDigit.push(a[i] % 10)
  }

  if (lastDigit % 10) {
    console.log("yes")
  } else {
    console.log("No")
  }

}

let a = [85, 25, 65, 21, 84]

divisibility(a)
