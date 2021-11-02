// PROMPT
// Given a non-negative integer, write a function that returns its multiplicative persistence--
// the number of times you must multiply the digits in a number together until you reach
// a single digit product.

// RESTATE
// How many times do you need to multiply the individual digits of a number together
// until it produces a number with one digit

// EXAMPLES
// 123 -> 1 * 2 * 3 = 6 , the answer is 1
// 27 -> 2 * 7 = 14, 1 * 4 = 4, the answer is 2
// Are there negatives? No
// What to return if input is a single digit? 0

// APPROACH
// Recursion
// Create a variable to hold the count/the number of times you need to multiply OR just add 1 before recursing
// Loop and multiply the digits together (will need to separate into string or array), add 1 to count
// If the digits length is > 1, recurse and do it again
// Return the variable

// CODE
function multPer(num) {
  num = num.toString();

  if (num.length === 1) return 0;

  let product = 1;
  for (let i = 0; i < num.length; i++) {
    product *= num[i];
  }
  return 1 + multPer(product);
}

// TEST
console.log("1", multPer(123));
console.log("2", multPer(27));
console.log("3", multPer(39));

// OPTIMIZE
// time - O (n)
//   toString - > n
//   math -> 1
//   loop -> n
//   recurse -> ?
// space - O (log n)
//   num's size is either constant or gets smaller --> constant / log n
// If I take an iterative approach, time will still be O(n) bc I will have to loop through
//   the length of the number string
