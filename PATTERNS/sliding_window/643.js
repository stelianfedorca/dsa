var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  let average = 0;

  //Compute the sum of the first k elements in the array and store it in maxsum.
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  if (nums.length === k) {
    average = maxSum / k;
    return average.toFixed(5);
  }

  let tempSum = maxSum;

  // starting from the k position till the end of the array
  for (let i = k; i < nums.length; i++) {
    // update the temporary sum by:
    // substracting the element that goes out of the window (nums[i - k])
    // adding the new element that comes into the window (nums[i])
    tempSum = tempSum - nums[i - k] + nums[i];
    console.log(`${i}: `, nums[i], ` out of the window: `, nums[i - k]);
    console.log('tempSum: ', tempSum);
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }

  average = maxSum / k;

  return average.toFixed(5);
};

console.log('output: ', findMaxAverage([1, 12, -5, -6, 3, 10, 9], (k = 3)));
