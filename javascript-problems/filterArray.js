var filter = function(arr, fn){
  return  arr.filter(fn)
}

var isEven = function(num){
  return num % 2 ===0 
}

var numbers = [2,3,4,5,6]

var evenNumebrs = filter(numbers, isEven);

console.log(evenNumebrs)
