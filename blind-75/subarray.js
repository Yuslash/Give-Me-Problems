var maximumSubarray = function(nums) {

  let cur_sum = 0 // we are initali the current sum to check whether the nums[i]  is less then cur_sum

  let max_sum = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {

    if (cur_sum < nums[i]) { // initaily we are checking that if the value is less then nums[i] ex if -2 < -3 then yes so the cur_sum will be -2 

      cur_sum = nums[i] //so see here the cur_sum will be -2 after

    } else {

      cur_sum = cur_sum + nums[i] // if the cur_sum is not greater then cur_sum will have the two sum added cur_sum and nums[i]
    }

    if (cur_sum > max_sum) { // this condition will check whether the cur_sum is greater than max_sum if it is then it will update to the max_sum

      max_sum = cur_sum

    }

  }

  return max_sum
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maximumSubarray(nums))
