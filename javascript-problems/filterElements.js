function filter(arr, fn){
  
  const filteredArr = []
  
  for(let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]) 
    }
  }
  return filteredArr
}

const arr = [0,10,20,30]

const isEven = (num) => num > 10

console.log(filter(arr,isEven))
