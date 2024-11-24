var filter = function(arr, fn){
  return  arr.filter(fn)
}

var isEven = function(num){
  return num > 10
}

var numbers = [0,10,20,30]

var evenNumebrs = filter(numbers, isEven);

console.log(evenNumebrs)
