// [[1], [2]] => [1, 2];
// [[1, [2]], [5]] => [1,2,5];
// base case

function isValue(elem) {
  if (Array.isArray(elem)) return false;
  return true;
}

// i = 0 ;
// [1]
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (isValue(arr[i])) result.push(arr[i]);
    else {
      const flattened = flatten(arr[i]);
      // result.push(...flattened);
      result = result.concat(flattened);
    }
  }

  return result;
}

console.log(flatten([[1], [2]]));
console.log(flatten([[1, [2]], [5]]));
