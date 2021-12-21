// PROMPT
// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// CODE
var searchInsert = function (nums, target) {
  let p1 = 0;
  let p2 = nums.length - 1;
  while (p1 <= p2) {
    let mid = Math.floor((p1 + p2) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      p2 = mid - 1;
    } else {
      p1 = mid + 1;
    }
  }
  return target > nums[p1] ? p1 + 1 : p1;
};

// TEST
console.log("2", searchInsert([1, 3, 5, 6], 5));
console.log("1", searchInsert([1, 3, 5, 6], 2));
console.log("4", searchInsert([1, 3, 5, 6], 7));
