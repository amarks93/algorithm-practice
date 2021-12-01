// PROMPT
// Insertion Sort

// RESTATE
// Insertion sort is when you compare your current element to the block of elements previous to it
// You "insert" the element in the correct place to return a sorted array

// EXAMPLE
// [1, 4, 6, 2, 5, 3] => [1, 2, 3, 4, 5, 6]

// APPROACH
// Nested loop
// i will keep track of how many times we need to loop
// j will keep track of the element that we are comparing to previous elements
// pointer will keep track of where we are in the group of previous elements?

// CODE
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}

// TEST
console.log("[1, 2, 3, 4, 5, 6]", insertionSort([1, 4, 6, 2, 5, 3]));

// OPTIMIZE
// time - O (n^2)
