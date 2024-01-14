/**
 * pseudocode
 * 1. start by picking the second element in the array because we assume that the first element is sorted
 * 2. now compare second one with the one before it and swap if necessary
 * 3. continue to the next element and if it is in the incorrect order, iterate through the sorted portion (the one the left side)
 * to place the elem in the correct place
 * 4. repeat until it's sorted
 *
 */

// [5,4,2,1,3];

// [4,5

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
