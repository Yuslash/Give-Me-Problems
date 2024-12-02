const compareTiplets = require('./compareTiplets')

test("the expected answer is [1,1]", () => {

  let a = [5, 6, 7]
  let b = [3, 6, 10]

  expect(compareTiplets(a, b)).toEqual([1, 1])
})
