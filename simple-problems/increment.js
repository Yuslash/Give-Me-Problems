var bobPlaylist = function(n) {

  let singerCount = {}

  for (let i = 0; i < n.length; i++) {

    let singer = n[i]

    if (singerCount[singer]) {

      singerCount[singer]++

    } else {

      singerCount[singer] = 1

    }

  }

  let maxCount = Math.max(...Object.values(singerCount))

  let faviourite = 0

  for (let count of Object.values(singerCount)) {

    if (count === maxCount) {

      faviourite++

    }

  }
  return faviourite

}

let n = [1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4]

console.log(bobPlaylist(n))
