// we have to find the minimum number in the array using o log n which is binary search 
//
// so now how do we find the minimum number in simple way
//
//actually if the nums[mid] is less then the mid - 1 then return the nums[mid]
//or if nums[mid]  is greater then mid + 1 then return the nums[mid]

function findMin(arr) {

  let leftPointer = 0
  let rightPointer = arr.length - 1

  while (leftPointer < rightPointer) {

    let mid = Math.floor((leftPointer + rightPointer) / 2)

    if (arr[mid] > arr[rightPointer]) {
      leftPointer = mid + 1
    } else {
      rightPointer = mid
    }
  }

  return arr[leftPointer]
}

let arr = [11, 13, 15, 17]

console.log(findMin(arr))
