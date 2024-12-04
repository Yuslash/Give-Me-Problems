let n = 5
let village = "H...H"

let gridArr = []
for (let i = 0; i < village.length; i++) {
  gridArr[i] = village[i]
}

//second step 
// that is to identfiy is there any house nearby
//

let isThereAnyHouseNearby = false
for (let i = 0; i < n - 1; i++) {
  if (gridArr[i] === 'H' && gridArr[i + 1] === 'H') {
    isThereAnyHouseNearby = true
    break
  }
}

// step 3
// no the actions for those condition from the step 2
// if that is false no one near ah house then you can but the Fence(B) after your house 

if (isThereAnyHouseNearby) {

  console.log("NO")

} else {

  for (let i = 0; i < n; i++) {
    if (gridArr[i] === '.') {
      gridArr[i] = 'B'
    }
  }

}

// step 4 converting array to string again because that whats problem asked

let result = ""
for (let i = 0; i < n; i++) {
  result += gridArr[i]
}

console.log("YES")
console.log(result)
