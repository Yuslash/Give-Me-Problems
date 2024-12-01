var ExceptSelf = function(nums) {

  let pre = 1
  let post = 1
  let result = []

  for (let i = 0; i < nums.length; i++) {
    result[i] = 1
  }

  //updating the prefix value
  for (let i = 0; i < nums.length; i++) {
    pre = pre * nums[i]
    result[i] = result[i] * pre
  }

  //populating the result by multiply with post
  for (let i = nums - 1; nums <= 0; i--) {
    post = post * nums[i]
    result[i] = result[i] * post
  }

  return result

}

nums = [1, 2, 3, 4]

console.log(ExceptSelf(nums))
