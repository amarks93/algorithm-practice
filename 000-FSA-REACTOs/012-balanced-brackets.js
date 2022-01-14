// PROMPT
// Write a function that determines whether an input string has balanced brackets.
// You are given an input string consisting of brackets—square [ ], round ( ), and curly { }.
// The input string can include other text. Write a function that returns either true if
// the brackets in the input string are balanced or false if they are not.
// Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

// CODE
function balancedBrackets(string) {
  const openingBrackets = "([{";
  const closingBrackets = ")]}";
  const bracketPairsObject = { ")": "(", "]": "[", "}": "{" };
  const stackOfBrackets = [];
  for (let i = 0; i < string.length; i++) {
    let curChar = string[i];
    if (openingBrackets.includes(curChar)) {
      stackOfBrackets.push(curChar);
    } else if (closingBrackets.includes(curChar)) {
      if (stackOfBrackets.length === 0) {
        return false;
      }
      let lastBracketInStack = stackOfBrackets[stackOfBrackets.length - 1];
      if (lastBracketInStack === bracketPairsObject[curChar]) {
        stackOfBrackets.pop();
      } else {
        return false;
      }
    }
  }
  return stackOfBrackets.length === 0;
}

// TEST
console.log("FALSE", balancedBrackets("[][(){}")); // false
console.log("FALSE", balancedBrackets("({)}")); // false
console.log("TRUE", balancedBrackets("({[]})")); // true
console.log("TRUE", balancedBrackets("text ( is allowed ){rwwrwrrww [] ()}")); // true
console.log("TRUE", balancedBrackets("")); // true
console.log("TRUE", balancedBrackets("No brackets here")); // true
