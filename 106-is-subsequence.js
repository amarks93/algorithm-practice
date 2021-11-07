// PROMPT
// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string
// appear somewhere in the second string, without their order changing.
// Soluton MUST have the following complexities:
// Time - O(N + M)
// Space - O(1)

// RESTATE
// Given two strings, can you find one of the strings in the other, with characters
// all in the same order. Characters dont have to be one right after another.
// True/false

// EXAMPLES
// 'hello', 'hello world' -> true
// 'sing', 'string' -> true
// 'abc', 'acb' -> false
// strings given will all be lowercase

// APPROACH
// Create a new variable that will hold the new string that represents letters that
// match the subString. Compare the two to see if they match.
// Set up two pointers, p1 and p2
// p1 is keeping track of where we are in our subString
// p2 is actually checking for matches
// p1 + p2 start at 0, p2 matches? concat to newString
// after every check, if there has been no match, just p2 moves
// if there is a match, they both move

// CODE
function isSubsequence(subString, string) {
  let p1 = 0;
  let p2 = 0;
  let newString = "";
  while (p1 < subString.length && p2 < string.length) {
    if (string[p2] === subString[p1]) {
      newString += string[p2];
      p1++;
      p2++;
    } else {
      p2++;
    }
    if (subString === newString) return true;
  }
  return false;
}

// TEST
console.log("TRUE", isSubsequence("hello", "hello world"));
console.log("TRUE", isSubsequence("sing", "string"));
console.log("FALSE", isSubsequence("abc", "acb"));
console.log("TRUE", isSubsequence("babc", "ababracadabra"));

// OPTIMIZE
// time - O (n + m)
//   new variables -> 1
//   while loop -> n + m because it is depending on length of two
//      different strings
//   concat strings -> 1
// ***NOTE TO SELF:  refers to space required by the algorithm,
//    not including space taken up by the inputs***
// space - O (n)
//   new string variable - O(n)
// I need to refactor so that there isn't a new string variable
//   We want O(1) for space...
// I guess I don't need to actually create the new variable to check
//   if the two match. I can just return false if I don't find a matching
//   letter when p2 goes down the line.

// CODE V2
function isSubsequence2(subString, string) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < subString.length) {
    if (string[p2] === subString[p1]) {
      p1++;
      p2++;
    } else if (p2 < string.length) {
      p2++;
    } else {
      return false;
    }
  }
  return true;
}

// TEST V2
console.log("TRUE", isSubsequence2("hello", "hello world"));
console.log("TRUE", isSubsequence2("sing", "string"));
console.log("FALSE", isSubsequence2("abc", "acb"));
console.log("TRUE", isSubsequence2("babc", "ababracadabra"));

// OPTIMIZE V2
// time - O (n)
//   new variables -> 1
//   while loop -> n
// space - O (1)
//   no new things
