//first we need to how to create a squarematrix

var diagonalDifference = function(size) {

  let matrix = []

  for (let i = 0; i < size; i++) {
    matrix[i] = [] // this will create a (size) number of rows inside the matrix 
    for (let j = 0; j < size; j++) {
      matrix[i][j] = i + j // this will put all the value with num++ like 1,2,3 in a order 
    }
  }

  return matrix
}

let size = 3

console.log(diagonalDifference(size))

let squre = []

for (let i = 0; i < 3; i++) {
  squre[i] = []
  for (let j = 0; j < 4; j++) {
    squre[i][j] = 0
  }
}

console.log(squre)
