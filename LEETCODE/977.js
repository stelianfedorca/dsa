var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let pointer = right;

  let result = [];

  while (left <= right) {
    const a = nums[left] ** 2;
    const b = nums[right] ** 2;

    if (a > b) {
      result[pointer] = a;
      pointer--;
      left++;
    } else {
      result[pointer] = b;
      pointer--;
      right--;
    }
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
