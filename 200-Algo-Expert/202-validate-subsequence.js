// PROMPT
// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// RESTATE
// Given two arrays, find out if the second array is in the first. The numbers have to be in the
// same order, but they do not have to be consecutive.

// EXAMPLES
// [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10] -> true
// [1, 1, 6, 1], [1, 1, 1, 6] -> false

// APPROACH
// set up a single for loop to track the number in the array
// set up a pointer to keep track of our place in the sequence
// if the current element in the array is the same as the current number in the sequence
// then we can move the pointer forward to continue checking the rest of the sequence
// if the the pointer number itself is the same length as the subsequence, AND that last element matches,
// then we know we have successfully reached the end

// CODE
function isValidSubsequence(array, sequence) {
  let p1 = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element === sequence[p1]) {
      if (p1 + 1 === sequence.length) return true;
      p1++;
    }
  }
  return false;
}

// TEST
console.log(
  "true",
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);
console.log("false", isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));

// OPTIMIZE
// time - O (n)
//  for loop - n is length of the array
// space - O (1)
