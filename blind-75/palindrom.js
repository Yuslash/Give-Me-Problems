let num = 121

// now what we have to do is convert the number to string how below see

let sumString = num.toString()
//now we should seperate those element by splitini with ""
let splitString = sumString.split("")

let reverseString = splitString.reverse() // this will reverse the order if 234 means then it will become 432

let joinString = reverseString.join("") // we need to join to compare 

if (sumString === joinString) {

  console.log(true)

} else {
  console.log(false)
}

console.log(reverseString)
