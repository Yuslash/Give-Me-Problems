function longestCommonPrefixer(arr) {
 
  if(!arr.length) return ""

  arr.sort()

  let left = arr[0]
  let right = arr[arr.length - 1]
  let prefix = ""

  for(let i = 0; i < Math.min(left.length, right.length); i++) {
    if(left[i] === right[i]) {
      prefix += left[i]
    } else {
      break
    }
  }

  console.log(prefix) 
  
}

let arr =["flower", "flow", "flight"]

longestCommonPrefixer(arr)
