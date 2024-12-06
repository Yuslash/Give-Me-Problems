let arr = [1,3,2,5,4,5]
  .sort((a,b) => a - b)

let minSum = arr.slice(0,4).reduce((acc,num) => acc+ num, 0)
let maxMum = arr.slice(-4).reduce((acc,num) => acc + num, 0)
//why here -4 and ther 0, 4 neither i dont know may because ok ok dont worry because we sorted the array first so the values will ordered properly

let final = minSum + maxMum

console.log(minSum)
console.log(maxMum)
console.log(final)
