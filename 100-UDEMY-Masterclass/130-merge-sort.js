// PROMPT
// Merge sort

// RESTATE
// Create merge sort

// EXAMPLE
// [1, 4, 6, 2, 5, 3] => [1, 2, 3, 4, 5, 6]

// APPROACH
// Split array in half over and over again until they each have a length of 1
// Use a helper function to merge and sort these split arrays
// Helper function will use two pointers for the two sorted arrays and a while loop
//  to determine if we have reached the end of an array or not
// Because the arrays are already sorted, once we hit the end of one array, we can just tack on
//  the rest of the other array

// CODE
function mergeSortHelper(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let mergeSortArr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      mergeSortArr.push(arr1[p1]);
      p1++;
    } else {
      mergeSortArr.push(arr2[p2]);
      p2++;
    }
  }
  if (p1 === arr1.length) {
    mergeSortArr = [...mergeSortArr, ...arr2.slice(p2)];
  } else {
    mergeSortArr = [...mergeSortArr, ...arr1.slice(p1)];
  }
  return mergeSortArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, middle);
  let arr2 = arr.slice(middle);
  let left = mergeSort(arr1);
  let right = mergeSort(arr2);
  let sorted = mergeSortHelper(left, right);
  return sorted;
}

// TEST
console.log("[1, 2, 3, 4, 5, 6]", mergeSort([1, 4, 6, 2, 5, 3]));

// OPTIMIZE
// time - O (n log n)
// space - O (n)
