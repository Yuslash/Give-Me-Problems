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

    if (arr[mid] < arr[mid - 1]) {

      return arr[mid]
    }
    else if (arr[mid] > arr[mid + 1]) {

      return arr[mid + 1]
    }
    else if (arr[leftPointer] < arr[mid]) {

      leftPointer = mid + 1

    } else {

      rightPointer = mid - 1

    }
  }

  return -1
}

let arr = [4, 5, 6, 7, 0, 1, 2]

console.log(findMin(arr))
