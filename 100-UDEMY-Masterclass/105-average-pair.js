// PROMPT
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array where
// the average of the pair equals the target average
// There may be more than one pair that matches the average target.
// Bonus constraints: Time: O(N), Space: O(1)

// RESTATE
// Input is a sorted array of integers, and a target average
// Find out if any pair of integers in the array will average to the target

// EXAMPLES
// [1,2,3], 2.5 -> TRUE
// [1,3,3,5,6,7,10,12,19]. 8 -> TRUE
// [-1,0,3,4,5,6], 4.1 -> FALSE
// [], 4 -> FALSE

// APPROACH
// Set up two pointers, one on either side
// Set up a while loop that ends when the pointers meet
// If the average is less than the target, add 1 to left pointer
// If the average is higher than the taret, subtract 1 from the right pointer
// Return true if target is matched, false otherwise

// CODE
function averagePair(sortArr, target) {
  let p1 = 0;
  let p2 = sortArr.length - 1;
  while (p1 < p2) {
    let avg = (sortArr[p1] + sortArr[p2]) / 2;
    if (avg === target) return true;
    if (avg < target) p1++;
    if (avg > target) p2--;
  }
  return false;
}

// TEST
console.log("TRUE", averagePair([1, 2, 3], 2.5));
console.log("TRUE", averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log("FALSE", averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log("FALSE", averagePair([], 4));

// OPTIMIZE
// time - O (n)
//   while loop -> n
// space - O (1)
//   array doesn't change -> 1
// does not need optimization - completed within given constraints
