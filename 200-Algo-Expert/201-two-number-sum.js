// PROMPT
// Write a function that takes in a non empty array of distinct integers and an integer
// representing the target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any order
// If no two numbers sum up to the target sum, the function should return an empty array

// RESTATE
// Given array and target, if two nums add up, return them
// else return empty array

// EXAMPLES
// [3, 5, -4, 8, 11, 1, -1, 6], 10 -> [-1,11]
// [4,6,1], 5 -> [4,1]

// APPROACH V1
// Two pointers - detailed previously in 001 and 007
// However, returning array instead of boolean

// CODE V1
function twoNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = array.length - 1;
  while (p1 < p2) {
    let sum = array[p1] + array[p2];
    if (sum === targetSum) return [array[p1], array[p2]];
    sum < targetSum ? p1++ : p2--;
  }
  return [];
}

// TEST V1
console.log("[-1,11]", twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log("[4,1]", twoNumberSum([4, 6, 1], 5));

// OPTIMIZE
// time - O (n log n)
//  sort -> log n
//  while loop -> n
//  math -> 1
// space - O (n)
//  created a new array
// can optimize time w a memo

// APPROACH V2
// Set up a for loop
// Check if the target minus the value is in the memo
// If it is, then we have a match, and can put both of those keys into an array
// if we get through the entire loop with no match, we return empty array

// CODE V2
function twoNumberSum2(array, targetSum) {
  let memo = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (memo[targetSum - element]) {
      return [element, targetSum - element];
    } else {
      memo[element] = true;
    }
  }
  return [];
}

// TEST V2
console.log("[-1,11]", twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log("[4,1]", twoNumberSum2([4, 6, 1], 5));

// OPTIMIZE V2
// time - O (n)
//  for loop -> n
//  object access -> 1
// space - O (n)
//  memo -> n
