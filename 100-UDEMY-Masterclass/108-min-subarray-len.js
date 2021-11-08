// PROMPT
// Write a function called minSubArrayLen which accepts two parameters - an array of positive
// integers and a positive integer. This function should return the minimal length of a
// contiguous subarray of which the sum is greater than or equal to the integer passed
// to the function. If there isn't one, return 0 instead.

// RESTATE
// Given an array and an integer (both positive), find the minimal length of numbers that adds
// up to or is greater than the integer given. If nothing adds up to enough, return 0.

// EXAMPLES
// [2,3,1,2,4,3], 7 -> 2
// [2,1,6,5,4], 9 -> 2
// [3,1,7,11,2,9,8,21,62,33,19], 52 -> 1
// [1,4,16,22,5,7,8,9,10], 95 -> 0

// APPROACH
// Set up a variable for minLength (0)
// Set up a variable for curSum
// Set up two pointers to keep track of the front and end of the subArray
// Set up a while loop that exits if the start point goes past the end of the nums array
// If the curSum is less than the sum we want, AND the we havent gone past the end point (end < nums
//    array length), then add to the sum, and also move the end point forward (kind of like a for loop)
// But if the curSum is greater than the target, then we need to find the length of the subarray,
//    so end - start
// Then we need to move our sliding window situation over, so subtract from the begin of the subarray
// and then we can add to end... because we are now most likely in the first "if" statement
// If the curSum is less than the target AND we have reached the end of the original array, we break

// CODE
function minSubArrayLen(arr, target) {
  let minLength = Infinity;
  let currentSum = 0;
  let beginning = 0;
  let end = 0;
  while (beginning < arr.length) {
    if (currentSum < target && end < arr.length) {
      currentSum += arr[end];
      end++;
    } else if (currentSum >= target) {
      if (end - beginning < minLength) minLength = end - beginning;
      currentSum = currentSum - arr[beginning];
      beginning++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// TEST
console.log("2", minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log("2", minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log("1", minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log("0", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

// OPTIMIZE
// time - O (n)
//   while loop -> n
// space - O (1)
//   numbers -> 1
// no need to optimize
