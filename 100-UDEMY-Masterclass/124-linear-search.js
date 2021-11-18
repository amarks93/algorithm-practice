// PROMPT
// Write a function called linearSearch which accepts an array and a value and returns the index at
// which the value exists. If the value does not exist in the array, return -1
// Do not use indexOf to implement this function!

// RESTATE
// Given an array and a value, find out if the value is in the array. Return where it is.

// EXAMPLES
// [10, 15, 20, 25, 30], 15 -> 1
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4 -> 5
// [1, 2, 3, 4, 5], 6 -> -1

// APPROACH
// Loop through, if values match, return i

// CODE
function linearSearch(array, value) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === value) return index;
  }
  return -1;
}

// TEST
console.log("1", linearSearch([10, 15, 20, 25, 30], 15));
console.log("5", linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log("-1", linearSearch([1, 2, 3, 4, 5], 6));

// OPTIMIZE
// space - O (n)
//  n is length of array
// time - O (1)
//  nothing new
