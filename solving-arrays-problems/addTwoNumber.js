var main = function(l1, l2) {
  
  let reversedl1 = []
  let reversedl2 = []
  let final = 0

  for(let i = l1.length - 1; i >=0; i--) {
     reversedl1.push(l1[i]) 
     reversedl2.push(l2[i]) 
  }

  let l1value = Number(reversedl1.join(""));
  let l2value = Number(reversedl2.join(""));

  final = (l1value + l2value).toString()
  
  let result = []

  for(let j = final.length - 1; j >= 0; j--) {
    result.push(Number(final[j])) 
  }

  console.log(result)

}

let k = 14

let l1 = [2,4,3]
let l2 = [5,6,4]

let simpleReveresel1 = [...l1].reverse();
let simpleReveresel2 = [...l2].reverse();

main(l1,l2)

console.log(simpleReveresel1)
console.log(simpleReveresel2)
