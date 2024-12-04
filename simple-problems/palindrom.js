let num = 121

// now what we have to do is convert the number to string how below see

let sumString = num.toString()
//now we should seperate those element by splitini with ""
let splitString = sumString.split("")

let reverseString = splitString.reverse()

let joinString = reverseString.join("")

if (sumString === joinString) {

  console.log(true)

} else {
  console.log(false)
}

console.log(reverseString)
