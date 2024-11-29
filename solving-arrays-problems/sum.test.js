const sum = require('./sum')
const multy = require('./multiSum')
const stock = require('./stock')

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("multiply 1 * 2 to be 3", () => {
  expect(multy(1, 2)).toBe(2)
})

test("get the maximum profit from the prices", () => {
  const prices = [7, 1, 5, 3, 6, 4]
  expect(stock(prices)).toBe(5)
})
