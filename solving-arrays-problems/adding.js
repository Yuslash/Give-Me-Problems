var main = function(arr) 
{ 
  let result = 0

  for(let i = 0; i < arr.length; i++) {

      result += arr[i]

  }

    return result
}

let arr = [1,8,6,2,5,4,8,3,7]

console.log(main(arr))
