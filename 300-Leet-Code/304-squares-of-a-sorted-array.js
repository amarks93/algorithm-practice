// PROMPT
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// CODE
var sortedSquares = function (nums) {
  const sortedNums = nums.map((num) => Math.abs(num)).sort((a, b) => a - b);
  return sortedNums.map((num) => Math.pow(num, 2));
};

// TEST
console.log("[4,9,9,49,121]", sortedSquares([-7, -3, 2, 3, 11]));

// OPTIMIZE
// Was supposed to solve this with two pointers
