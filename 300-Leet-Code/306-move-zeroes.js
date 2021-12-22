// PROMPT
// https://leetcode.com/problems/move-zeroes/
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// CODE
var moveZeroes = function (nums) {
  const numsCopy = [...nums];
  let pointer = 0;
  let pointerCopy = 0;
  while (pointer < numsCopy.length) {
    if (numsCopy[pointerCopy] === 0) {
      pointerCopy++;
    } else if (pointerCopy >= numsCopy.length) {
      nums[pointer] = 0;
      pointer++;
    } else {
      nums[pointer] = numsCopy[pointerCopy];
      pointer++;
      pointerCopy++;
    }
  }
  return nums;
};

// TEST
console.log("[1,3,12,0,0]", moveZeroes([0, 1, 0, 3, 12]));
