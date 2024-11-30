var bobPlaylist = function(n) {

  let singerCount = {}

  for (let i = 0; i < n.length; i++) {

    let singer = n[i] //we are taking the indices

    if (singerCount[singer]) { // checking if that is same

      singerCount[singer]++   //It will add the object and the value example in the array the maxCount of the number is 1 so it will added like 1:2, 2:2, 4:1     

    } else {

      singerCount[singer] = 1

    }
  }

  //step 2 find the maximum count

  let maxCount = Math.max(...Object.values(singerCount)) //this code will extract the value only the math.max will get the maximum value from the array and the spread operator will used to pass the array elements

  // step 3 count how many singers have the maximum count

  let favouirteSinger = 0

  for (let count of Object.values(singerCount)) {

    if (count === maxCount) {

      favouirteSinger++ //add the maxCount of the singer

    }
  }

  return favouirteSinger

}

n = [1, 1, 1, 2, 2, 2, 2, 4]

bobPlaylist(n)

console.log(maxCount)
