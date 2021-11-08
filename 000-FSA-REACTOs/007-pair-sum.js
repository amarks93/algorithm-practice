// PROMPT
// Given an array arr consisting of N integers, sorted in ascending order (least to greatest),
// and a separate number (a sum), determine if any 2 numbers in the array add up to the sum.
// Return true if any 2 different numbers within the array add up to sum. Return false if no 2
// numbers in the array add up to sum.

// RESTATE
// Note: I totally just did this one...001? Except those weren't sorted, these are
// Given a sorted array and a sum, see if any two numbers from the array add up to the sum

// EXAMPLES
// [1, 1, 2, 3, 4, 5], 7 -> true (either 2+5 or 3+4)
// [1, 2, 3, 4, 5], 10 -> false
// [0, 2, 3, 6, 9, 10], 10 -> true (0 + 10)
// [1, 2, 3, 7, 8], 7 -> false
// [-2, 0, 4, 6, 10], 8 -> true (-2 + 10)
// [1, 2, 3, 4, 5], 2 -> false

// APPROACH
// two pointers from both sides of the array
// if sum is larger than target p2--
// else p1++

// CODE
function pairSum(arr, tar) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let sum = arr[p1] + arr[p2];
    if (sum === tar) return true;
    else if (sum > tar) p2--;
    else p1++;
  }
  return false;
}

// TEST
console.log("TRUE", pairSum([1, 1, 2, 3, 4, 5], 7));
console.log("FALSE", pairSum([1, 2, 3, 4, 5], 10));
console.log("TRUE", pairSum([0, 2, 3, 6, 9, 10], 10));
console.log("FALSE", pairSum([1, 2, 3, 7, 8], 7));
console.log("TRUE", pairSum([-2, 0, 4, 6, 10], 8));
console.log("FALSE", pairSum([1, 2, 3, 4, 5], 2));

// OPTIMIZE
// time - O (n)
//   loop -> O (n)
// space - O (1)
//   numbers -> 1
// No need to optimize
