const sum = require('./sum')
const multy = require('./multiSum')

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("multiply 1 * 2 to be 3", () => {
  expect(multy(1, 2)).toBe(2)
})
