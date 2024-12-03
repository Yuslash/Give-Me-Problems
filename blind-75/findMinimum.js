var rotationArray = function(nums, k) {

  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
    console.log(`steps ${i + 1}: ${nums}`)
  }
}
let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

rotationArray(nums, k)
