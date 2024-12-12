function main(a, b) {
  if (a === 0) {
    return b
  }

  else if (b === 0) {
    return a
  }

  let positionXOR = a ^ b
  let carry = (a & b) << 1

  console.log(carry)

}

main(2, 3)
