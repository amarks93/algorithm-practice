// PROMPT
// Given a non-empty string of lowercase letters and a non-negative integer representing a key,
// write a function that returns a new string obtained by shifting every letter in the input string
// by k positions in the alphabet, where k is the key
// https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor

// CODE
function caesarCipherEncryptor(string, key) {
  let newString = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    let index = alphabet.indexOf(currentLetter);
    let newIndex = (index + key) % 26;
    newString += alphabet[newIndex];
  }
  return newString;
}

// TEST
console.log("def", caesarCipherEncryptor("abc", 3));
console.log("abc", caesarCipherEncryptor("xyz", 3));
