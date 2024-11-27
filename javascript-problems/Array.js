var something = function(arr, fn) {
  for(let i = 0; i < arr.length; ++i)
    arr[i] = fn(arr[i], i)
  return arr
}
console.log(something([1,2,3,4]))

