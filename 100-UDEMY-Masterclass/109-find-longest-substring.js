// PROMPT
// Write a function called findLongestSubstring, which accepts a string and returns the length
// of the longest substring with all distinct characters.

// RESTATE
// Given a string, need to find the longest strand of unique characters

// EXAMPLES
// '' -> 0
// 'rithmschool' -> 7
// 'aaaaa' -> 1
// 'banana' -> 3

// APPROACH
// create a memo
// set up a variable for the longest length
// set up start pointers
// loop through and mark down the start and end points (end is i in the loop),
// for each index in the string, add the character to the memo with key: char and value: index
// keep looping and if you find a character that's already in the memo
// change the starting point to the instance of the character
// start moving the end point again
// lather rinse repeat

// CODE
function findLongestSubstring(str) {
  let longestSubstring = 0;
  let memo = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let end = i;
    let curChar = str[i];

    if (memo[curChar]) {
      start = Math.max(start, memo[curChar]);
    } else {
      longestSubstring = Math.max(longestSubstring, end - start + 1);
      memo[curChar] = end + 1;
    }
  }

  return longestSubstring;
}

// TEST
console.log("0", findLongestSubstring(""));
console.log("7", findLongestSubstring("rithmschool"));
console.log("1", findLongestSubstring("aaaaa"));
console.log("3", findLongestSubstring("banana"));

// OPTIMIZE
// time - O (n)
//  loop -> n
//  access object -> 1
// space - O (n)
//  created an object -> n
