// how to replace house with (.)
//there are 2 people need house then 

let n = ['H', '.', '.', '.', 'H']
let need = 2

for (let i = 0; i < n.length; i++) {

  if (n[i] === '.') {
    n[i] = 'B'
  }

}

console.log(n)
