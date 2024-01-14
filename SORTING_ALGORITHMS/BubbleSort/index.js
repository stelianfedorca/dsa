// define a function that takes an array (all numbers) and returns it sorted

/***
 * pseudocode
 * start loop from the end of the array towards the beginning (i)
 * start an inner loop from the beginning towards i-1 (j)
 * if arr[j] is greater than arr[j+1], swap those 2 values
 * return the sorted array
 */
function bubbleSort(arr) {
  let noSwaps = true;

  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

console.log(bubbleSort([5, 10, 11, 3, 8, 9, 2]));
