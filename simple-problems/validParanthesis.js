
let stack = []

let map = {
  ")":"(", 
  "]":"[",
  "}":"{",
}
 
var main = function(s){
  for(let i = 0; i < s.length; i++) {
  
    let char = s[i]

    if(char === "(" || char === "[" || char === "{") {
  
      stack.push(char)

    } else {
  
      if(!stack.length || stack[stack.length - 1] !== map[char]) {
        return false
      }

      stack.pop()

    }

  }

  return !stack.length

}

let s = "({})"

console.log(main(s))
