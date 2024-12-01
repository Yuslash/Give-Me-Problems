var ExceptSelf = function(nums) {

  let pre = 1
  let post = 1
  let result = new Array(nums.length).fill(1)


  //updating the prefix value
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre
    pre = pre * nums[i]
  }

  //populating the result by multiply with post
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * post
    post = post * nums[i]
  }

  return result

}

nums = [1, 2, 3, 4]

console.log(ExceptSelf(nums))
