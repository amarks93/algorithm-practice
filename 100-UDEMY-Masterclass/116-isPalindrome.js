// PROMPT
// Write a recursive function called isPalindrome with returns true if the string
// passed to it is a palindrome (reads the same foreward and backward). Otherwise it returns false

// RESTATE
// Check if the input string is a palindrome - this means first and last letters will have to match
// and continue to match as you go inward

// EXAMPLES
// 'awesome' -> false
// 'racecar' -> true
// 'tacocat' -> true
// 'helloworld' -> false
// no spaces in these inputs

// APPROACH
// Check if the first and last letters match
// If they match, recurse and run the function on the rest of the string
//  (so all of it but the first and last letters)
// If there is only one letter left, or none, then we have a palindrome

// CODE
function isPalindrome(str) {
  if (str.length === 1) return;
  if (str[0] === str[str.length - 1]) {
    isPalindrome(str.slice(1, str.length - 1));
    return true;
  }
  return false;
}

// TEST
console.log("false", isPalindrome("awesome"));
console.log("true", isPalindrome("racecar"));
console.log("true", isPalindrome("tacocat"));
console.log("false", isPalindrome("helloworld"));

// OPTIMIZE
// time - O(n)
// space - O(n)
