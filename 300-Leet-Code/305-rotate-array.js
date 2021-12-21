// PROMPT
// https://leetcode.com/problems/rotate-array/
// Given an array, rotate the array to the right by k steps,
// where k is non-negative.

// CODE
var rotate = function (nums, k) {
  let numsCopy = [...nums];
  let index = nums.length - (k % nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (index === nums.length) {
      index = 0;
    }
    let replacementNum = numsCopy[index];
    nums[i] = replacementNum;
    index++;
  }
  return nums;
};

// TEST
console.log("[5, 6, 7, 1, 2, 3, 4]", rotate([1, 2, 3, 4, 5, 6, 7], 3));
