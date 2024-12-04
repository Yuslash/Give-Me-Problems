// how to replace house with (.)
//

let n = ['.', 'H', '.', '.', '.']

for (let i = 0; i < n.length; i++) {
  if (n[i] === 'H') {
    if (i + 1 < n.length && n[i + 1] === '.') {
      n[i + 1] = 'B'
    }
  }

}

console.log(n)
