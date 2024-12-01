var ExceptSelf = function(nums) {

  let pre = 1
  let post = 1
  let result = new Array(nums.length).fill(1) //filling the result array with 1 of the nums.length which is 4 currently you can look below and how it look is result = [1,1,1,1]


  //updating the prefix value
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre // update the pre value in the result[i] 
    pre = pre * nums[i] // this formual will uupdate the pre value by ex the previous value = 2 then the nums[i] = 3 so the pre = 2 x 3 = 6 then the pre is 6
  }

  //populating the result by multiply with post
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * post // this will update the result by multiply with current post 
    post = post * nums[i] // and then this will update th post by multiply the previous post value with nums[i] ex prevpost = 4 and nums[i] = 3 so 4 x 3 = 12 then that will be updated to the post value
  }

  return result // [24,12,8,6]

}

nums = [1, 2, 3, 4]

console.log(ExceptSelf(nums))
