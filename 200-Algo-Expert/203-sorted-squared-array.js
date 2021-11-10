// PROMPT
// Write a function that takes in a non-empty array of integers that are sorted in ascending order
// and returns a new array of the same length with the squares of the original integers also sorted
// in ascending order

// RESTATE
// Given an array, return a new array with the integers squared and sorted

// EXAMPLES
// [1,2,3,4,5] => [1,4,9,16,25]
// [-5,-3,1,2] => [1,4,9,25]

// APPROACH V1
// Map over the array, square, and sort

// CODE V1
function sortedSquaredArray(array) {
  return array.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}

// TEST V1
console.log("[1,4,9,16,25]", sortedSquaredArray([1, 2, 3, 4, 5]));
console.log("[1,4,9,25]", sortedSquaredArray([-5, -3, 1, 2]));

// OPTIMIZE V1
// time - O (n log n)
//  map -> n
//  sort -> log n
// space - O (n)
//  new array => n
// Can definitely optimize by taking out the sort method

// APPROACH V2
// Set up two pointers, front and back
// create new empty array
// loop over array to make all numbers their absolute value
// loop through array from back to front
// if first number is bigger than last number, put that value at the end of the array
// then move up in the original array
// otherwise, first number goes to end of array?

// CODE V2
function sortedSquaredArray2(array) {
  let p1 = 0;
  let p2 = array.length - 1;

  let squaredArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) array[i] = array[i] * -1;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[p1] > array[p2]) {
      squaredArray[i] = array[p1] * array[p1];
      p1++;
    } else {
      squaredArray[i] = array[p2] * array[p2];
      p2--;
    }
  }
  return squaredArray;
}

// TEST V2
console.log("[1,4,9,16,25]", sortedSquaredArray2([1, 2, 3, 4, 5]));
console.log("[1,4,9,25]", sortedSquaredArray2([-5, -3, 1, 2]));

// OPTIMIZE V2
// time - O (n)
//  2 loops -> 2n
// space - O (n)
//  new array => n
// Optimized from V1...but not understanding the role of p1++ and p2--
//  I got my tests to pass by guessing o.o
