// write a function that accepts an array and a value
// array of numbers, value number
// loop through the array and check if the current array element is equal to the value
// if it's found return index, otherwise return -1
// assume that the array is sorted

// based on divide and conquer concept

/***
 * pseudocode
 * create 2 variables
 * one pointer to start index
 * and another pointer to last index
 * while the left pointer comes before the right pointer: (in other words: while the element on the left is smaller than the one from right)
 *  - create a pointer in the middle
 *  - if value is found, return index
 *  - if the value is smaller than middle pivot, move right pointer down
 *  - if the value is bigger than middle pivot, move left pointer up
 *  - if the value is not found, return -1
 */
function binarySearch(arr, value) {
  let left = 0; // 0
  let right = arr.length - 1; // 10

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2); // 6
    console.log(mid);
    if (value === arr[mid]) {
      // item found return index
      return mid;
    }

    if (value < arr[mid]) {
      right = mid - 1; // 5
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
//
// binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], 'g');
