//when you want to count the number of times a substring appears in a longer string

// write a function that accepts a string and a substring and counts the number of times
// that substring appears in the longer string
/***
 * pseudocode
 * loop over the longer string
 * loop over the substring
 * if the characters don't matcvh, break out of the inner loop
 * if the characters do match, keep going
 * if you complete the inner loop and find a match, increment de count of matches
 * return the count
 */

function naiveStringSearch(longStr, subStr) {
  let matchCount = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (subStr[j] !== longStr[i]) break;
      if (subStr[j] === longStr[i + j]) {
        matchCount++;
      }
    }
  }

  return matchCount;
}

console.log(naiveStringSearch('addsdomgtrromg', 'omg'));
