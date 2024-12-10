var containsDuplicate = function(nums) {

  let seen = new Set()

  for (let i = 0; i < nums.length; i++) {
   if (seen.has(nums[i])) {
      return true
    }

    seen.add(nums[i])
  }

  return false

}

let nums = [1, 2, 3, 1]

console.log(containsDuplicate(nums))
