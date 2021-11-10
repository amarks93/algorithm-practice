// PROMPT
// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g.,
// factorial four (4!) is equal to 24, because  4*3*2*1 equals 24. 0! is always 1

// RESTATE
// Given a number, return the product of that number as a factorial

// EXAMPLES
// 1 -> 1
// 2 -> 2
// 4 -> 24
// 7 -> 5040

// APPROACH
// Recursion.
// Base case is if the number is less than 1, then return 1
// Recursive case multiplies the num by the return of the function recursively called
// on num -1

// CODE
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// TEST
console.log("1", factorial(1));
console.log("2", factorial(2));
console.log("24", factorial(4));
console.log("5040", factorial(7));

// OPTIMIZE
// time - O (n)
//  executes once every time num gets smaller, and a definite end point
//  so call gets called recursively n times
// space - O (n)
//  n is the size of the call stack
