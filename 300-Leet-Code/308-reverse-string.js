// PROMPT
// https://leetcode.com/problems/reverse-string/
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// CODE
var reverseString = function (s) {
  const sCopy = [...s];
  let pointer = 0;
  let pointerCopy = s.length - 1;
  while (pointer < s.length) {
    s[pointer] = sCopy[pointerCopy];
    pointer++;
    pointerCopy--;
  }
  return s;
};

// TEST
console.log("['o','l','l','e','h']", reverseString(["h", "e", "l", "l", "o"]));
