let result = ""

let str = ['flower', 'flow']


const minLength = Math.min(str.map(s => s.length)) // the spread operator is really good merging extracting like that so we are mapping then it will took 2 values and i think it will 
// compare and give us minimum value because we use Math.min but i don t think this is right

for (let i = 0; i < minLength; i++) { //yeah i found it will throw the error because the actual lenght of the arr is 2 only ok but we have 3 
  
  for(let j = 0; j < str.length; j++) {

    if(i < str[j].length) {
      result += str[j][i]
    }

  }

  // yeah i understand to only pass when the value is lesser then the minLength i think may less than or equal
} 

console.log(result)
