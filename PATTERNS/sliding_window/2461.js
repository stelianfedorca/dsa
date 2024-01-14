var maximumSubarraySum = function (nums, k) {
  // used for storing the frequency of an element within the window k
  const elemFrequency = new Map();

  let tempSum = 0;
  let maxSum = 0;

  // first calculate the sum of first k elemens in the array
  // which will become the initial `window`
  for (let i = 0; i < k; i++) {
    tempSum += nums[i];
    elemFrequency.set(nums[i], (elemFrequency.get(nums[i]) || 0) + 1);
  }

  // check if all the elements inside window are unique
  // if so, store the initial sum inside maxSum
  if (elemFrequency.size === k) {
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }

  // loop through the array starting from the k position
  for (let i = k; i < nums.length; i++) {
    // remove the first element from the window (nums[i - k]), in other words
    // Subtract the sum and frequency of first element to reflect the removal
    tempSum = tempSum - nums[i - k];
    elemFrequency.set(nums[i - k], (elemFrequency.get(nums[i - k]) || 0) - 1);

    // if frequency is zero, then remove it from the map
    // so that we always keep k unique elements in the window
    if (elemFrequency.get(nums[i - k]) === 0) {
      elemFrequency.delete(nums[i - k]);
    }

    // then we add into current sum the next element that comes into window (nums[i])
    tempSum = tempSum + nums[i];
    // and add it to the map
    elemFrequency.set(nums[i], (elemFrequency.get(nums[i]) || 0) + 1);

    // everytime an element is added to the map,
    // check if the there are k unique elements
    // if so, calculate the max sum again
    if (elemFrequency.size === k) {
      maxSum = tempSum > maxSum ? tempSum : maxSum;
    }
  }

  return maxSum;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
