/* Write a function called same which accepts 2 arrays.
 the function should return true if every value in the 
 array has it's corresponding value squared in the second array.
 The frequency of values must be the same

 same([1,2,3], [4, 1, 9]) => true
 same([1,2,3], [1, 9]) => false
 same([1,2,1], [4,4,1]) => false (must be same frequency)
 */

/***
 * {
 *   0: 1,
 *   1: 3,
 *   ....
 * }
 */

// naive solution
// time complexity: O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    const valueSquared = arr1[i] ** 2;
    let correctIndex = arr2.indexOf(valueSquared); // O(n)
    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }

  // O(n^2)
  return true;
}

// using the frequency counter approach
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // console.log(frequencyCounter1);

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    const squaredValue = key ** 2;
    if (!(squaredValue in frequencyCounter2)) return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

// console.log(same2([1, 2, 3], [4, 1, 9])); // true
// console.log(same2([1, 2, 3], [1, 9])); // false
console.log(same2([1, 2, 1], [4, 4, 1])); // false
