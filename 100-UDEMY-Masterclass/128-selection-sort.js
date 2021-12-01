// PROMPT
// Selection Sort

// RESTATE
// Selection sort is when you find the minimum value in the array, and place it at the start by
// swapping its index with the "current index" you are on. Also shrink your window after swapping
// to ensure the sort can find the next smallest value

// EXAMPLE
// [1, 4, 6, 2, 5, 3] => [1, 2, 3, 4, 5, 6]

// APPROACH
// Set a min value
// Set the min value's current index
// Nested loop through, with i starting at 0 so we can loop through the approriate num of times
// if arr[j] is less than the min val, store j
// at the end, swap the min value w the arr at position i

// CODE
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // let min = arr[i];
    let currentMinIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMinIndex]) {
        // min = arr[j];
        currentMinIndex = j;
      }
    }
    if (i !== currentMinIndex) {
      let temp = arr[i];
      arr[i] = arr[currentMinIndex];
      arr[currentMinIndex] = temp;
    }
  }
  return arr;
}

// TEST
console.log("[1, 2, 3, 4, 5, 6]", selectionSort([1, 4, 6, 2, 5, 3]));

// OPTIMIZE
// time - O (n^2)
//  nested loop
