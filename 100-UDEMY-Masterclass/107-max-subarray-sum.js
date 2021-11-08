// PROMPT
// Given an array of integers and a number, write a function called maxSubarraySum, which
// finds the maximum sum of a subarray with the length of the number passed to the function
// Note that a subarray must consist of consecutive elements from the original array.

// RESTATE
// Function takes in an array of integers, and a number. Need to find the largest sum that can be
// created by the array of integers, using the number specified. Numbers should all be in a row.

// EXAMPLES
// [100,200,300,400], 2 -> 700
// [1,4,2,10,23,3,1,0,20], 4 -> 39
// [-3,4,0,-2,6,-1], 2 -> 5

// APPROACH
// Set up a variable "max sum" which will start at -Infinity
// Create a for loop from 0 to num
// Add up the first (num) integers in the array, replace max sum w this number
// Create another loop outside the above loop from 0 to array length-num
// Subtract the number at i, and add the number at i+num, if that number is bigger than maxSum
// then replace it, go until the end

// CODE
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = -Infinity;
  let newSum = 0;
  for (let i = 0; i < num; i++) {
    newSum += arr[i];
    if (newSum > maxSum) maxSum = newSum;
  }
  for (let i = 0; i < arr.length - num; i++) {
    newSum = newSum - arr[i] + arr[i + num];
    if (newSum > maxSum) maxSum = newSum;
  }
  return maxSum;
}

// TEST
console.log("700", maxSubarraySum([100, 200, 300, 400], 2));
console.log("39", maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log("5", maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));

// OPTIMIZE
// time - O (n)
//   new variables -> 1
//   arithmetic -> 1
//   for loops -> 2n
// space - O (1)
//   numbers -> 1
// Nothing to optimize, there's a little repetition in lines 29 + 33, but the changes
// wouldn't affect space/time I don't think. I would just set maxSum to 0, then after the first
// for loop I would set maxSum to newSum which would help eliminate line 29.
