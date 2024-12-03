function rotatedSorted(arr, k) {

  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }

  return arr

}

let arr = [3, 4, 5, 1, 2]
let k = 2

console.log(rotatedSorted(arr, k))
