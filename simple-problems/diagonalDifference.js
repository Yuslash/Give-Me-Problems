//first we need to how to create a squarematrix

var diagonalDifference = function(size) {
  let matrix = []

  for (let i = 0; i < size; i++) {
    matrix[i] = []
    for (let j = 0; j < size; j++) {
      matrix[i][j] = 0
    }
  }


  return matrix
}

let size = 3

console.log(diagonalDifference(size))
