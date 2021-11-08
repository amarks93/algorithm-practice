// PROMPT
// Given a string str, create a function that returns a boolean, corresponding to whether that
// string is a palindrome (spelled the same backwards and forwards). Our palindrome check should
// be case-insensitive.

// RESTATE
// Function takes in a string - is it a palindrome

// EXAMPLES
// "racecar" -> true
// "cat" -> false
// "abcdefgfedcba" -> true

// APPROACH
// Set up two pointers, match the front to the back
// If it never matches, return false

// CODE
function palindrome(str) {
  let p1 = 0;
  let p2 = str.length - 1;
  while (p1 < p2) {
    if (str[p1] !== str[p2]) return false;
    p1++;
    p2--;
  }
  return true;
}

// TEST
console.log("TRUE", palindrome("racecar"));
console.log("FALSE", palindrome("cat"));
console.log("TRUE", palindrome("abcdefgfedcba"));

// OPTIMIZE
// time - O (n)
//   new variables -> 1
//   arithmetic -> 1
//   while loop -> n
// space - O (1)
//   numbers -> 1
//   no NEW strings
// No need to optimize
