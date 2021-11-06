// PROMPT
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits
// Your solution MUST have the follow complexities:
// Time: O(N)

// RESTATE
// The function takes in two positive integers, the output is true
// if both integers contain numbers that repeat the same number of times

// EXAMPLE
// 182, 281 -> true
// 34, 14 -> false
// 3589578, 5879385 -> true

// APPROACH
// If length is different, false
// 1st loop: Store first number's digits in a memo, key is number, value is frequency
// 2nd loop: Go through second number, subtract 1 from value every time key is a match
// If the value we are trying to subtract from is 0 at any point (falsy), then false
// If the key cannot be found at all, then false

// CODE
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let memo = {};
  for (let i = 0; i < num1.length; i++) {
    let digit = num1[i];
    memo[digit] ? memo[digit]++ : (memo[digit] = 1);
  }

  for (let i = 0; i < num2.length; i++) {
    let digit = num2[i];
    if (memo[digit]) {
      memo[digit]--;
    } else {
      return false;
    }
  }

  return true;
}

// TEST
console.log("TRUE", sameFrequency(182, 281));
console.log("FALSE", sameFrequency(34, 14));
console.log("TRUE", sameFrequency(3589578, 5879385));
console.log("FALSE", sameFrequency(123456123456, 123456123457));

// OPTIMIZE
// time - O (n)
//   insert/search memo -> 1
//   variable assignments -> 1
//   for loops -> n + n
// space - O (n)
//   str length -> n
//   object reference -> n
// completed the challenge to reach O(n) -> do not need to optimize
