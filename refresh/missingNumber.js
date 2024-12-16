function sortArray(arr, narray) {

  let n = arr.length

  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  let sortedArray = arr

  let result = []

  for (i = 0; i <= narray; i++) {
    result.push(i)
  }

  for (i = 0; i <= narray; i++) {
    if (result[i] !== sortedArray[i]) {
      return result[i]
    }
  }

}


let narray = 3
let arr = [3, 0, 1]

console.log(sortArray(arr, narray))
