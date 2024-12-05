// how to staircase

var stair = function(rows, columns) {


  for (let i = 0; i < rows; i++) {

    let line = ''

    for (let j = 0; j < columns; j++) {

      line += '#'

    }

    console.log(line)
  }


}

let rows = 5
let columns = 5

stair(rows, columns)
