// PROMPT
// Write a function called recursiveRange which accepts a number and adds
// up all the numbers from 0 to the number passed to the function

// RESTATE
// Given a number, find the sum of that number and all the numbers between it
// and 0

// EXAMPLES
// 6 -> 21
// 10 -> 55

// APPROACH
// Similar to all the previous:
// Base case: if number is 0, return 0
// Recursive case: return number plus the return when the function
// is called with the number - 1

// CODE
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// TEST
console.log("21", recursiveRange(6));
console.log("55", recursiveRange(10));

// OPTIMIZE
// time - O(n)
//  n is the number of times function called, gets smaller each call
// space - O (n)
//  n is size of call stack
