var main = function(str) {

  let currentIndex = 0
  let result = ""

  for(let i = 0; i < 2 - 1 ; i++) {

      if(str[i][currentIndex] === str[i+1][currentIndex]) {

        console.log("yeah its equal")
        currentIndex += 1
    } else {
      console.log(str[i])
    }

  }

}

let str = ["flower", "flow"]

main(str)
//
//var anotherMain = function(str) {
//
//  console.log(str[0][0])
//
//}
//
//let str = ["flower", "flow"]
//
//anotherMain(str)
