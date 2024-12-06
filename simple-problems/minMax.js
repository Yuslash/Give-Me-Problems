var main = function(arr) {

  let minimum = []
  let maximum = []

  let minResult = 0
  let maxResult = 0

  for(let i = 0; i < arr.length - 1; i++) {
    
    let currentIndex = 0
    
    for(let j = i + 1; j < arr.length; j++) {

// but only the four digits we need to take how?
      
      if(arr[i] < arr[j]) {

        minimum.push()
        
      }
         
    }
  }

  for(let i = 0; i < minimum.length; i++) {
    let minResutlt += minimum[i]
    let maxResult += maximum[i]
  }

  result = minResult + maxResult

  return result 

}

let arr = [1,2,3,4,5]

main(arr)
