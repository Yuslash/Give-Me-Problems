var compareTiplets = function(a, b) {

  let alicePoints = 0
  let bobPoints = 0
  let result = []

  for (let i = 0; i < a.length; i++) {

    if (a[i] < b[i]) alicePoints++

  }

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) bobPoints++
  }

  result.push(alicePoints, bobPoints)

  return result

}

module.exports = compareTiplets
