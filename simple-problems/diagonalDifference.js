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

//console.log(diagonalDifference(size))

let squre = []

for (let i = 0; i < 3; i++) {

  squre[i] = []

  for (let j = 0; j < 1; j++) {

    squre[i][j] = 0

  }
}

//console.log(squre)

// so to calculate in both diagonal direction the main and secondary 
// first main diagonal 
// our size is 3 so the formal for to calulate diagonal is mainDiagonalCal += matrix[i][i] whcih is matrix[0][0]
// the second iteration the matrix[i][i] will be matrix[1][1] and third iteration matrix[2][2]
// with that you can calucalte with diagonal now secondary diagonal
// secondaryDiagonal += is like matrix[size - 1 - i] so incase the size = 3 so matrix[3 - 1 - i] 
// first iteration will be like matrix[i][ 3 - 1 - 0]  = 2 so we will get the last index of the array because the array start from 0
// secod iteration matrix[1][3 - 1 -1 ] = 1 
// third iteration matrix[2][3-2-1] = 0
// i hope you may understand a bit 
// lets get hands on code now

var additionDigaonal = function(matrix) {

  let mainDiagonal = 0
  let secondDiagonal = 0
  let difference = 0

  for (let i = 0; i < matrix.length; i++) {
    mainDiagonal += matrix[i][i]
    secondDiagonal += matrix[i][matrix.length - 1 - i]
  }

  difference = Math.abs(mainDiagonal - secondDiagonal)
  return difference

}

let matrixs = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

console.log(additionDigaonal(matrixs))
