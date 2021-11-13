// PROMPT
// Write a function called someRecursive which accepts an array and a callback. The function
// returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false
// The callback is: isOdd = value => value % 2 !== 0

// RESTATE
// Given a function with an array and a callback functon as input, output will be true
// if any number in the array satisfies the callback

// EXAMPLES
// [1,2,3,4], isOdd => true
// [4,6,8], isOdd => false
// [2,4,6,7], isOdd => true

// APPROACH
// Pass each value in the array into the the callback
// If the callback returns true, then function returns true
// If it returns false, we pop off the next value in the array to pass to the cb
// Once the array has no values left, we return false

// CODE
const isOdd = (value) => value % 2 !== 0;

function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  let value = arr.pop();
  if (cb(value)) return true;
  else return someRecursive(arr, cb);
}

// TEST
console.log("TRUE", someRecursive([1, 2, 3, 4], isOdd));
console.log("FALSE", someRecursive([4, 6, 8], isOdd));
console.log("TRUE", someRecursive([2, 4, 6, 7], isOdd));

// OPTIMIZE
// time - O(n)
//  pop is O(1)
//  n is the length of the array
// space - O(n)
//  n is the size of the callstack, which is proportional to n which decreases to 0
