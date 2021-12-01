// PROMPT
// Bubble Sort

// RESTATE
// Bubble sort is when you go through the collection and compare two values against each other
// starting at the beginning. The larger value (if you are looking for ascending order) will get swapped
// to the right, so that it ends up near the end. Compare the swapped value with the next value
// and swap again so that the larger value moves toward the end. Repeat until sorted.

// EXAMPLE
// [1, 4, 6, 2, 5, 3] => [1, 2, 3, 4, 5, 6]

// APPROACH
// Nested loop
// Note that because we find the largest value each time, we don't need to loop all the way to the
// end each time. If the first loop runs in descending order, then we can specify a new "end" each time
// so that no unnecessary work is done.
// Therefore: Loop from end to beginning (i), inner loop (j) will loop from 0 to i - 1 (since we dont have
// to go to the end). Compare the value at j to the value at j + 1, and swap the bigger one to the right
// Return sorted array

// CODE
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// TEST
console.log("[1, 2, 3, 4, 5, 6]", bubbleSort([1, 4, 6, 2, 5, 3]));

// OPTIMIZE
// right now it is going through all the steps even if it's already sorted
// adding in a check to see if any swaps were made
// time - O (n^2)
//  nested loop
//  unless it's nearly sorted, then closer to n
