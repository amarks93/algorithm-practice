// PROMPT
// Given an array of numbers and a target number (a "sum"),
// determine if any 2 numbers in the array add up to the sum.
// Return true if any 2 different numbers within the array add up to sum.
// Return false if no 2 numbers in the array add up to sum.

// RESTATE
// Can two numbers in the array add up to the target number

// EXAMPLES
// Given [1,2,3,4,5] and 9 -> TRUE
// Given [1,2,3,4,5] and 12 -> FALSE
// Edge cases? Should not matter if negative
// Decimals? Are all integers
// Repeat numbers? None

// APPROACH V1
// Sort the array
// Two pointers, start at front and back
// if less than target, move front pointer up
// if more than target, move back pointer down

// CODE V1
// function twoNumSum(arr, tar) {
//   arr = arr.sort((a, b) => a - b);
//   let frontPoint = 0;
//   let backPoint = arr.length - 1;
//   while (frontPoint < backPoint) {
//     let curSum = arr[frontPoint] + arr[backPoint];
//     if (curSum === tar) return true;
//     else if (curSum < tar) frontPoint++;
//     else if (curSum > tar) backPoint--;
//   }
//   return false;
// }

// APPROACH V2
// Do not need to sort - store the values in a memo 1 by 1
// Key will be the number, value will be true
// Loop through the array
// If the target minus the current number can be found in the memo, return true
// If it cannot be found, store the current number in the memo for later reference

// CODE V2
function twoNumSum(arr, tar) {
  const memo = {};
  for (let i = 0; i < arr.length; i++) {
    let difference = tar - arr[i];
    if (memo[difference]) return true;
    else memo[arr[i]] = true;
  }
  return false;
}

// TEST
console.log("TRUE", twoNumSum([1, 2, 3, 4, 5], 9));
console.log("FALSE", twoNumSum([1, 2, 3, 4, 5], 12));
console.log("FALSE", twoNumSum([-1, -12, 17, 4, 2], 12));
console.log("TRUE", twoNumSum([7, 2, -3, 4, 0], -3));

// OPTIMIZE V1
// time - O (n * log n)
//   sort -> n * log n
//   loop -> n
// space - O (1)
//   fP, bP, curSum --> all constant
//   array does not change size --> constant
// time can definitely be better than O (n * log n) --> code V2

// OPTIMIZE V2
// time - O (n)
//   loop -> n
//   memo -> 1
// space - O (n)
//   memo -> n
//   difference -> 1
// time is much better than V1, space is worse bc of the number of keys in the memo
