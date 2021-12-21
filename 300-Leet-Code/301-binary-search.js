// PROMPT
// https://leetcode.com/problems/binary-search/
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// CODE
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2);
    let element = nums[midpoint];
    if (element === target) {
      return midpoint;
    } else if (target <= element) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }
  return -1;
};

// TEST
console.log("4", search([-1, 0, 3, 5, 9, 12], 9));
console.log("-1", search([-1, 0, 3, 5, 9, 12], 2));
