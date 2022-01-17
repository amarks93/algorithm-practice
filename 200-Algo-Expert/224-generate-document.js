// PROMPT
// https://www.algoexpert.io/questions/Generate%20Document

// RESTATE
// I will be given two strings, one containing all the characters I can use, and one containing
// the document that I am trying to create. If I have enough of the appropriate characters to create
// the document, I return true, otherwise I return false

// EXAMPLES
// characters = "abcabc"
// document = "aabbccc"
// This returns FALSE, not enough "c"s

// APPROACH
// Create a memo
// Loop through the characters and add the characters to the memo where the key is the character
// and the value is the frequency.
// Then loop through the document, and for each character, subtract it from the memo
// If the frequency of the character we need is 0, then we can return false
// If the character is not in the memo at all, we can return false
// If we make it to the end of the loop, we can return true

// CODE
function generateDocument(characters, document) {
  const memo = {};
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    memo[char] ? (memo[char] += 1) : (memo[char] = 1);
  }
  for (let i = 0; i < document.length; i++) {
    const char = document[i];
    if (memo[char]) {
      memo[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

// TEST
console.log(
  "TRUE",
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
console.log("FALSE", generateDocument("abcabc", "aabbccc"));

// OPTIMIZE
// time - 2n -> O(n)
// space - O(n)
