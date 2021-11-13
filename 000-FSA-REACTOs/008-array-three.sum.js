// PROMPT
// Given an array of distinct integers and an integer representing a target sum, write a function
// that returns an array of all triplets in the input array that sum to the target sum.

// RESTATE
// Find out if any three numbers in an array add to up the target
// Returns all possible combinations

// EXAMPLES
// [12, 3, 1, 2, -6, 5, -8, 6], 0 -> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
// [5, 6 , 1, -9 , 7, 3 , 2], 35 -> []
// [1, 15, -5, 12 , -3, 6 , 2], 10 -> [[ -3, 1, 12 ]]

// APPROACH

// CODE
function arrayThreeSum() {}

// TEST
console.log(
  "[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]",
  arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
);
console.log("[]", arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35));
console.log("[[ -3, 1, 12 ]]", arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10));

// OPTIMIZE
