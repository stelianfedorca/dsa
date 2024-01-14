/***
 * In this coding challenge, you will be implementing a function called findLongest(array)
 * that takes an array of strings array as the argument.
 *  The function should return the longest string in the array.
 */

// we should a sorting algorithm
function findLongest(arr) {
  let longestString = '';
  let currentIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
      currentIndex = i;
    } else if (arr[i].length === longestString.length) {
      currentIndex = i;
    }
  }

  return longestString;
}

console.log(findLongest(['apple', 'banana', 'pear']));
// console.log(findLongest(['', 'a', 'aa', 'aaa']));
