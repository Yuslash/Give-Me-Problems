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
  
  // this will swap or reverse the element from 0 to 2 which is 5,6,7 to 7,6,5. Why 2 because k = 3, k - 1 = 2
  main(0, k - 1)

  // this will swap or reverse the element from 3 to 6 which is 4,3,2,1 to 1,2,3,4
  main(k, n - 1)

  return arr

}

let arr = [1,2,3,4,5,6,7]
let k = 3

console.log(rotateArray(arr, k))
