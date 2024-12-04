// how to replace house with (.)
//there are 2 people need house then 

let n = 5
let village = "H...H"

//step no 1 convert the string to array

let gridarr = []

//so now create a for loop add the each string as element to the array
for (let i = 0; i < n; i++) {
  gridarr[i] = village[i]
}

// step no 2 identify or scan the grid is there any house next to any house so write a state conditoin
let isThereAnyHouseNearBy = false

for (let i = 0; i < n - 1; i++) { // do you guys know why n - 1 its because there will condition down below in that there will like gridarr[i + 1] already if the maximu array length is 5 then it will check the 6 so there will problem so to avoid it will stop the looop before the last element

  if (gridarr[i] === 'H' && gridarr[i + 1] === 'H') {
    isThereAnyHouseNearBy = true
    break
  }
}

// we wrote the conditino now how will proceed the action that is the step 3 beflow

//step no 3

if (isThereAnyHouseNearBy) {
  console.log("NO")
} else {
  for (let i = 0; i < n; i++) {
    if (gridarr[i] === '.') {
      gridarr[i] = 'B'
    }
  }
}

// step no 4 we are gonna convert the string to array each element from the array

let result = ""
for (let i = 0; i < n; i++) {
  result += gridarr[i]
}

//then finally sumbit the answer

console.log("YES")
console.log(result)
