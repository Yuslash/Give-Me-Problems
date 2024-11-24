function mergeAlternately(word1, word2) {
  let merged = ''
  let i = 0, j = 0

  while (i < word1.length || j < word2.length) {
    if(i < word1.length) merged += word1[i++]
    if(j < word2.length) merged += word2[j++]
  }

  return merged
}

console.log(mergeAlternately("abc", "pqr"))
