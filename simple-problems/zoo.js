let word = "zzoooo"

let countz = 0, counto = 0

for (let i = 0; i < word.length; i++) {
  if (word[i] == 'z') {
    countz++
  } else if (word[i] == 'o') {
    counto++
  }
}
if (counto == 2 * countz) {
  console.log('yes')
} else {
  console.log('no')
}
