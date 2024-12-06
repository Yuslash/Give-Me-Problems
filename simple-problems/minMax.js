var main = function(arr) {

  let minimum = []
  let maximum = []

  for(let i = 0; i < arr.length - 1; i++) {
    
    let currentIndex = 0
    
    for(let j = i + 1; j < arr.length; j++) {

      if(arr[i] < arr[j]) {

        console.log(arr[i])

      }
         
    }
  }

}

let arr = [1,2,3,4,5]

main(arr)
