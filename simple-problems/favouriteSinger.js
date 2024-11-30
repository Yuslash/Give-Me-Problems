var bobPlaylist = function(n) {

  let singerCount = {}
  for (let i = 0; i < n.length; i++) {
    let singer = n[i] //we are taking the indices
    if (singerCount[singer]) { // checking if that is same
      singerCount[singer]++     //if that true then it will continue to the next iteration
    } else {
      singerCount[singer] = 1
    }
  }

  //step 2 find the maximum count

  let maxCount = Math.max(...Object.values(singerCount))

  // step 3 count how many singers have the maximum count

  let favouirteSinger = 0

  for (let count of Object.values(singerCount)) {
    if (count === maxCount) {
      favouirteSinger++
    }
  }

  return favouirteSinger

}

let n = [1, 1, 2, 2, 4]

console.log(bobPlaylist(n))
