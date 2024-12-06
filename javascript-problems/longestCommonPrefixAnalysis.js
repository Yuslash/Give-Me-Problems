let result = ""

let str = ['flower', 'flow']

//const minLength = Math.min(...str.map(s => s.length)) // to better understanding we can do that in native 

let minLength = Infinity

for(let i = 0; i < str.length; i++) {

  if(str[i].length < minLength) {
    minLength = str[i].length
  }

}

//we got the least number of character from the array

console.log(minLength)
