// PROMPT
// Write a function called reverse which accepts a string and returns a new string in reverse

// RESTATE
// Use recursion to create a function with a string as input and the reverse string as output

// EXAMPLES
// 'awesome' -> emosewa
// 'algoschool' -> loohcsogla

// APPROACH
// Because recursion in a way returns things backwards
// I will concatenate the return of the recursed function to the first letter of the string
// In each recursive case, I cut the string off by one at the start
// Base case will be if length is only 1 letter, return that letter

// CODE
function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// TEST
console.log("emosewa", reverse("awesome"));
console.log("loohcsogla", reverse("algoschool"));

// OPTIMIZE
// time - O(n)
//  the length of the string determines the time
// space - O(n)
//  n is the size of the call stack, the string has an end point as it gets smaller
// this unit asks for functions to use recursion
