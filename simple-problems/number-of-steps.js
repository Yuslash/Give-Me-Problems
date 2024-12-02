var main = function(a, b) {

  let steps = 0
  let target = Math.min(...a)

  for (let i = 0; i < a.length; i++) {
    while (a[i] > target) {
      if (a[i] >= b[i]) {
        a[i] -= b[i]
        steps++
      } else {
        return -1
      }
    }

    if (a[i] < target) {
      return -1
    }
  }

  return steps

}

let a = [5, 7, 10, 5, 15]
let b = [2, 2, 1, 3, 5]

console.log(main(a, b))
