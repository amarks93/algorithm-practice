// PROMPT
// Write a function called productOfArray which takes in an array of numbers and returns the
// product of them all

// RESTATE
// Given an array, add up all the numbers

// EXAMPLES
// [1,2,3] -> 6
// [1,2,3,10] -> 16

// APPROACH
// Recursion
// Base case: if length is 0, return 1
// Recursive case: return the array at 0 times the return of the rest of the array passed into the
// function

// CODE
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// TEST
console.log("6", productOfArray([1, 2, 3]));
console.log("60", productOfArray([1, 2, 3, 10]));

// OPTIMIZE
// time - O (n)
//  n is the length of the array, because that's the number of times
//  this function recurses, and there's a definite end point since the arr gets smaller
// space - O (n)
//  n is the size of the call stack
