// PROMPT
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the
// first letter of each string in the array.

// RESTATE
// Use recursion to capitalize the first letter of each word in an array of strings.

// EXAMPLES
// ['car','taco'] -> ['Car', 'Taco']

// APPROACH
// Base case: if the array has a length of one, capitalize the first letter of the one string and return
// Recursive case:
// Return the first word of the array plus the return of recursively running the function on the rest of the array
//  (keep slicing it by 1)

// CODE
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1)];
  }
  let firstString = [arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1)];
  return firstString.concat(capitalizeFirst(arr.slice(1)));
}

// TEST
console.log(
  "['Car', 'Taco', 'Banana']***",
  capitalizeFirst(["car", "taco", "banana"])
);

// OPTIMIZE
// time - O (n)
//  n is the length of the array, which decreases over time
// space - O (n)
//  n is the size of the call stack, which has a definite end
