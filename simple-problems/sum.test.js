const compareTiplets = require('./compareTiplets')

test("the expected answer is [2,1]", () => {

  let a = [17, 28, 30]
  let b = [99, 16, 8]

  expect(compareTiplets(a, b)).toEqual([2, 1])
})

test("the expected answer is [1,1]", () => {
  let a = [5, 6, 7]
  let b = [3, 6, 7]

  expect(compareTiplets(a, b)).toEqual([1, 1])
})
