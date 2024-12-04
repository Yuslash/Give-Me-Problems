var plusMinus = function(arr) {

  let positive = 0
  let negative = 0
  let zero = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++
    }
    else if (arr[i] < 0) {
      negative++
    } else {
      zero++
    }
  }


  let postiveDecimal = (positive / arr.length).toFixed(6)
  let negativeDecimal = (negative / arr.length).toFixed(6)
  let zeroDecimal = (zero / arr.length).toFixed(6)

  console.log(`${postiveDecimal}\n${negativeDecimal}\n${zeroDecimal}`)

}


let arr = [1, 1, 0, -1, -1]
plusMinus(arr)
