// write a function that accepts an array and a value
// array of numbers, value number
// loop through the array and check if the current array element is equal to the value
// if it's found return index, otherwise return -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 10, 77, 3, 5, 6], 3));
