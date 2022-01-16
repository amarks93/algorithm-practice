// PROMPT
// Write a function that takes in a non-empty string and returns its run-length encoding
// https://www.algoexpert.io/questions/Run-Length%20Encoding

// CODE
function runLengthEncoding(string) {
  let encodedString = "";
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    stack.push(char);
    if (char === string[i + 1]) {
      continue;
    } else {
      let total = stack.length;
      while (total > 9) {
        encodedString += 9;
        encodedString += char;
        total -= 9;
      }
      encodedString += total;
      encodedString += char;
      stack = [];
    }
  }
  return encodedString;
}

// TEST
console.log("9A4A2B4C2D", runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
console.log(
  "1a1A1a1A5a1A3a4A1B3b4B",
  runLengthEncoding("aAaAaaaaaAaaaAAAABbbbBBBB")
);
