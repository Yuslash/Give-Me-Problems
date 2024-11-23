function expect(actual) {
  return {
    toBe: function(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actaul}`)
      }
    },
    notToBe: function(expected) {
      if (actual === expected) {
      throw new Error(`Expected to not be ${expected} but got ${actual}`) 
    }
  }
  }
}

expect(2).toBe(2)
expect(3).notToBe(3)
