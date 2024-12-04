function binarySearch(arr, target) {

  let left = 0
  let right = arr.length - 1

  while (left <= right) {

    let mid = Math.floor((right + left) / 2)

    if (arr[mid] === target) {
      return mid
    }
    else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }

  }

  return -1

}
let arr = [1, 1, 3, 4, 5, 6, 3, 5, 6, 7, 9, 11]
let target = 6

console.log(binarySearch(arr, target))
