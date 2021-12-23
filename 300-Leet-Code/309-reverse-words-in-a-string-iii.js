// PROMPT
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Given a string s, reverse the order of characters in each word within a sentence while still
// preserving whitespace and initial word order.

// CODE
var reverseWords = function (s) {
  let sArray = s.split(" ");
  let newArray = [];
  for (let i = 0; i < sArray.length; i++) {
    let currentString = sArray[i];
    let newString = "";
    for (let j = currentString.length - 1; j >= 0; j--) {
      newString += currentString[j];
    }
    newArray.push(newString);
  }
  return newArray.join(" ");
};

// TEST
console.log(
  "'s'teL ekat edoCteeL tsetnoc'",
  reverseWords("Let's take LeetCode contest")
);
