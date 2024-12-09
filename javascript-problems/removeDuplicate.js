let arr = [1, 1, 2]
let uniqueNummber = []
//  let duplicateNumber = []

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false

  for (let j = 0; j < uniqueNummber.length; j++) {
    if (arr[i] === uniqueNummber[j]) {
      isDuplicate = true
      //   duplicateNumber.push(i)
      break
    }
  }

  if (!isDuplicate) {
    uniqueNummber.push(arr[i])
  }
}

console.log(uniqueNummber)
console.log(uniqueNummber.length)
