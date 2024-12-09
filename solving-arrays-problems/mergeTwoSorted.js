let list1 = [1,2,4]
let list2 = [1,3,4]

let mergedArray = [...list1, ...list2]
  .sort((a, b) => a - b)

console.log(mergedArray)
