function rotateArray(arr, k) {

  let n = arr.length
  k %= n

  function main(start, end) {
    
    while(start < end) {
  
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--     
    }
  }
  
  // this will reverse the entire array
  main(0, n - 1)

  // this is will rotate the elements 3 times becoz k = 3
  main(0, k - 1)

  // again we are gonna reverse the entire array
  main(k, n - 1)

  return arr

}

let arr = [1,2,3,4,5,6,7]
let k = 3

console.log(rotateArray(arr, k))
