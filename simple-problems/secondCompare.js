var secondCompare = function(a, b) {

  let alicePoints = 0
  let bobPoints = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alicePoints++
    else if (a[i] < b[i]) bobPoints++
  }

  return [alicePoints, bobPoints]
}

let a = [5, 6, 7]
let b = [3, 6, 10]


let c = [17, 28, 30]
let d = [99, 16, 8]

console.log(secondCompare(a, b))
console.log(secondCompare(c, d))
