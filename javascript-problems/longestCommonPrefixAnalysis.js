let result = ""

let str = ['flower', 'flow']

for (let i = 0; i < 2; i++) { //yeah i found it will throw the error because the actual lenght of the arr is 2 only ok but we have 3 
  result += str[i][i]
} 

const minLength = Math.min(str.map(s => s.length)) // the spread operator is really good merging extracting like that so we are mapping then it will took 2 values and i think it will 
// compare and give us minimum value because we use Math.min but i don t think this is right



console.log(minLength)
