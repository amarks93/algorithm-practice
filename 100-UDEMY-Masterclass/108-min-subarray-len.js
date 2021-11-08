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
// Set up for loop, from 0 to arr length
// Add until you reach the int or are greater than
// Store this length (the index)
// Have to do a separated sliding window situation
// Subtract from the front until it's no longer equal to, then add to the end...

// CODE
function minSubArrayLen(arr, int) {
  let minLength = 0;
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    if (curSum >= int) {
      minLength = i + 1;
      curSum = 0;
      continue;
    }
  }

  return minLength;
}

// TEST
console.log("2", minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log("2", minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log("1", minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log("0", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

// OPTIMIZE
