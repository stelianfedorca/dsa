// write a function that takes an array and returns it sorted

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }

    if (minimum !== i) {
      swap(arr, i, minimum);
    }
  }

  return arr;
}

console.log(selectionSort([10, 3, 2, 6, 4, 1]));
