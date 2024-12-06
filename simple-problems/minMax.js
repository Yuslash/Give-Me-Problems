var main = function(arr) {

  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] < arr[j]) {
        console.log(arr[i])
      } else {
        console.log("nothin just an inchident")
      }
         
    }
  }

}

let arr = [1,2,3,4,5]

main(arr)
