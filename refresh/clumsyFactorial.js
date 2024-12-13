// here first we are gonna use the stack to push and pop the value and to get the sum up the stack we are gonna use reduce
// ok first we ne stack

function main(n) {
  const stack = [n]

  n-- // for each iteration it will decrease the number because to get the factorial 4,3,2,1
  let index = 0 // to calculate with 4 operation like index % 4 === 1 then it will mulitply 2 is divide 3 is addition 4 is subtraction

  // lets create a an while loop to set a base case to stop the recusrion because we used the n-- above 
  while (n > 0) { // if the n is going below the 0 then the loop will stop
    if (index % 4 === 0) {
      stack.push(stack.pop() * n) // so you can see that simple it is pushing the value tha caluculate what is caluculate is stack.pop() will take the last elemenet form the stack so iteration the remaining last element is 4 only 4 is availbe later we will get the next iteration value n-- which is 3 so next time it will take 3
    } else if (index % 4 === 1) {
      const last = stack.pop()
      stack.push(Math.floor(last / n)) // why we are using the Math.floor() to return integer division why example if 10 /3 then 3.3333 so we are getting floating point to avoid that we are using math.floor() it will give as the integer 
    } else if (index % 4 === 2) {
      stack.push(n) // why not stack.push(stack.pop() + n) because we are not calculating here we are just assigning the operator in order
    } else if (index % 4 === 3) {
      stack.push(-n) // use obsivously we are subtract in the end we are putting that operator;
    }
    // so now to reduce the stack value i mean for the factorial we gonna use this n--
    // and to iterate the index we need increase so this index++
    n--
    index++
  }

  // and finally we are out the loop now we have factorial in stack with various traditional operator for each elements now we have to sum up 
  return stack.reduce((a, b) => a + b, 0) // this function called accumlate and current the accumlate like a index it will increase each iteration and the b is current it will have the current index value and sum of it you will get the result

}

console.log(main(4))
console.log(main(10))

