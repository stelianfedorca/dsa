// 10 elems -> index 9
// 10 - 4 = 6 -> max index 5

// [2,6,9,2,1,8,5,6,3] num = 3

// naive solution
// function maxSumOfSubArray(arr, num) {
//   let temp = 0;
//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return max;
// }

// sliding window approach
function maxSumOfSubArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    const current = arr[i - num];
    tempSum = tempSum - current + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
// console.log(maxSumOfSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

var maxSubsequence = function (nums, k) {
  if (nums.length === 1) return nums[0];

  let maxSum = 0;
  let tempSum = 0;
  let subsequence = [];

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
    subsequence.push(nums[i]);
  }

  tempSum = maxSum;

  for (let i = k; i < nums.length; i++) {
    const current = nums[i - k]; // get one element from the sliding window
    tempSum = tempSum - current + nums[i];
    if (tempSum > maxSum) {
      console.log(nums[i], nums[i - k + 1]);
      maxSum = tempSum;
      // console.log(nums[i]);
    }
  }

  return maxSum;
};

console.log('result: ', maxSubsequence([2, 1, 3, 3, 5], 2));
