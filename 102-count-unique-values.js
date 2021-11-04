// PROMPT
// Implement a function that accepts a sorted array and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// RESTATE
// Given an array, find the number of unique values
// May be negatives
// Array is sorted

// EXAMPLES
// [1,1,1,1,1,2] -> 2
// [-2,-1,-1,0,1] -> 4
// [] -> 0

// APPROACH
// Set up a count
// Set up two pointers, one at index 0, one at the next
// Add first number to the count, check if second number is the same
// If it is not, add second number to count and move both pointers up 1
// We already added the first number, so just make sure second number is diff and add
// When the numbers ARE the same, move them both up and don't add to count
// All of this (besides the very first number) is in a while loop that runs according to length

// CODE
function countUniqueValues(arr) {
  let count = 0;
  let left = 0;
  let right = 1;
  if (arr.length) count++;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left++;
      right++;
    } else {
      left++;
      right++;
    }
  }
  return count;
}

// TEST
console.log("0", countUniqueValues([]));
console.log("2", countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log("4", countUniqueValues([-2, -1, -1, 0, 1]));
console.log("6", countUniqueValues([1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6]));
console.log("7", countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// OPTIMIZE
// time - O (n)
//   adding numbers -> 1
//   variable assignments -> 1
//   while loop -> n
// space - O (n)
//   numbers -> 1
//   array reference -> n
// Instead of moving both pointers every time, I could alternatively only move the right
//   pointer when I need to find a different number, and the left index in the array will change to
//   the unique number. The space and time will stay O(n), but there's technically less assignments
//   and less arithmetic being done. The "count" is simply left index + 1

// CODE V2
function countUniqueValues2(arr) {
  if (!arr.length) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
      right++;
    } else {
      right++;
    }
  }
  return left + 1;
}

// TEST V2
console.log("0", countUniqueValues2([]));
console.log("2", countUniqueValues2([1, 1, 1, 1, 1, 2]));
console.log("4", countUniqueValues2([-2, -1, -1, 0, 1]));
console.log("6", countUniqueValues2([1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 6]));
console.log("7", countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
