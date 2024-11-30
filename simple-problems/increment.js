let singerCount = {}

var boob = function(n) {

  for (let i = 0; i <= n.length; i++) {

    let singer = n[i]

    if (singerCount[singer]) {

      singerCount[singer]++

    } else {

      singerCount[singer] = 1
    }

  }

  return singerCount

}

let n = [1, 1, 2, 2, 4]

console.log(boob(n))
