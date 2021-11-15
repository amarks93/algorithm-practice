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
// Set up a variable for array combinations
// Loop through the array
// Set up a memo to keep track of numbers we have seen
// Set up a variable to hold the difference between the target and the current index's num
// This will be used to find a third num that fits
// Nested loop to get the array at j (one spot forward from i so we don't have repeats)
// If the difference between the target and the numbers at i and j is in the memo,
// then we can push all three of those numbers to our combinations array
// Otherwise, add num at j to the memo
// It will loop to the end and then the memo will restart with i at 1, etc. to find more combinations.

// CODE
function arrayThreeSum(arr, target) {
  let combinations = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let currentNum = arr[i];
    let currentDiff = target - currentNum;
    let seen = {};
    for (let j = i + 1; j < arr.length; j++) {
      let thirdNum = arr[j];
      if (seen[currentDiff - thirdNum]) {
        combinations.push([currentNum, thirdNum, currentDiff - thirdNum]);
      } else {
        seen[thirdNum] = true;
      }
    }
  }
  return combinations;
}

// TEST
console.log(
  "[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]***",
  arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
);
console.log("[]***", arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35));
console.log("[[ -3, 1, 12 ]]***", arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10));

// OPTIMIZE
// time - O (n^2)
//  nested loops -> n^2
// space - O (n)
//  new memo -> n
//  new array -> n
