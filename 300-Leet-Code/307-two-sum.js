// PROMPT
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number. Let these two numbers be
// numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// CODE
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let result = [];
  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (target === sum) {
      result.push(start + 1);
      result.push(end + 1);
      return result;
    } else if (target < sum) {
      end--;
    } else {
      start++;
    }
  }
};

// TEST
console.log("[1, 2]", twoSum([2, 7, 11, 15], 9));
