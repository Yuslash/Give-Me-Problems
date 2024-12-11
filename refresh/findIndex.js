function main(haystack, needle) {
  // we need to find is there any word in haystack which has needle then return that index or return -1

  let index = haystack.indexOf(needle);

  if (index !== -1) {
    return index
  } else {
    return -1
  }

}

let haystack = "sadbutsad"
let needle = "sad"
console.log(main(haystack, needle))
