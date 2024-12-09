var removeDuplicate = function(arr) {

  let j = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++
      arr[j] = arr[i]
    }
  }

  return j + 1

}

let arr = [1, 1, 2]
let k = removeDuplicate(arr)
console.log(arr.slice(0, k))
console.log(k)
