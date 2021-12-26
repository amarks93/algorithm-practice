// PROMPT
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring without repeating characters.

// CODE
var lengthOfLongestSubstring = function (s) {
  let memo = {};
  let longest = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    let current = s[end];
    if (memo[current] !== undefined && memo[current] >= start) {
      start = memo[current] + 1;
    }
    memo[current] = end;
    longest = Math.max(longest, end - start + 1);
  }
  return longest;
};

// TEST
console.log("0", lengthOfLongestSubstring(""));
console.log("7", lengthOfLongestSubstring("rithmschool"));
console.log("1", lengthOfLongestSubstring("aaaaa"));
console.log("3", lengthOfLongestSubstring("banana"));
