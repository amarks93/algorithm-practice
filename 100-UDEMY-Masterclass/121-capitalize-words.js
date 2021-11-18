// PROMPT
// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array contianing each word capitalized.

// RESTATE
// Given an array, return the array with all words capitalized. Use recursion.

// EXAMPLES
// ['hi', 'hello'] -> ['HI', 'HELLO']

// APPROACH
// Similar to 119
// Set up a base case and a recursive case
// Base case: if there is only one value left in the array, return that value in caps
// Rec. case: concat the first value of the array in caps to the return of the recurse of the rest
// of the array

// CODE
function capitalizeWords(arr) {
  if (arr.length === 1) return arr[0].toUpperCase();
  let firstValue = [arr[0].toUpperCase()];
  return firstValue.concat(capitalizeWords(arr.slice(1)));
}

// TEST
console.log(
  "['CAR', 'TACO', 'BANANA']***",
  capitalizeWords(["car", "taco", "banana"])
);

// OPTIMIZE
// time - O (n)
//  n is the length of the array, which decreases over time
// space - O (n)
//  n is the size of the call stack, which has a definite end
// Same as 119
