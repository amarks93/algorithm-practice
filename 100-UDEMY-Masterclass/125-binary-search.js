// PROMPT
// Write a function called binarySearch which accepts a sorted array and a value
// and returns the index at which the value exists. Otherwise, return -1.

// RESTATE
// Given a sorted array and a value, return index where value occurs. If not present, return -1

// EXAMPLES
// [1, 2, 3, 4, 5], 2 -> 1
// [1, 2, 3, 4, 5], 6 -> -1

// APPROACH
// Divide and conquer.
// Set up pointers for left and right ends of array, set up pointer for middle
// If value is less than middle, change right pointer
// If value is greater than middle, change left pointer
// Set up new middle
// If value is equal to middle, return
// Once left and right pointers crash, we've run out of options
// Return -1

// CODE
function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let pivot = Math.floor(left + right / 2);
  while (left <= right) {
    if (value === array[pivot]) {
      return pivot;
    } else if (value < array[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
    pivot = Math.floor((left + right) / 2);
  }
  return -1;
}

// TEST
console.log("1", binarySearch([1, 2, 3, 4, 5], 2));
console.log("-1", binarySearch([1, 2, 3, 4, 5], 6));

// OPTIMIZE
// time - O (log n)
//  cutting number of things to search through in half each time
// space - O (1)
