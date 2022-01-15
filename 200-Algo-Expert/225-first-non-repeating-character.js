// PROMPT
// Write a function that takes in a string of lowercase English-alphabet letters and returns
// the index of the string's first non-repeating character
// The first non-repeating character is the first character in a string that occurs only once.
// If the input string doesn't have any non-repeating characters, your function shuld return -1

// CODE
function firstNonRepeatingCharacter(string) {
  const memo = {};
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    memo[current] ? (memo[current] += 1) : (memo[current] = 1);
  }
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (memo[current] === 1) return i;
  }
  return -1;
}

// TEST
console.log("1", firstNonRepeatingCharacter("abcdcaf"));
console.log("6", firstNonRepeatingCharacter("faadabcbbebdf"));
