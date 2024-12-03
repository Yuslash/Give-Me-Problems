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
