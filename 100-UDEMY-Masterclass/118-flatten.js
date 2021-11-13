// PROMPT
// Write a recursive function called flatten which accepts an array of arrays and
// returns a new array with all values flattened

// RESTATE
// Given an array containing other arrays, return a flattened array

// EXAMPLES
// [1,2,[3,5]] -> [1,2,3,5]
// [1, [2, [3, 4], [[5]]]] -> [1, 2, 3, 4, 5]
// [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] -> [1,2,3]

// APPROACH
// If value at [0] is an array, recurse
// If it is not an array, we can add it to our new flattened array

// CODE
function flatten(arr, flatArr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], flatArr);
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

// TEST
console.log("[1,2,3,5]", flatten([1, 2, [3, 5]]));
console.log("[1, 2, 3, 4, 5]", flatten([1, [2, [3, 4], [[5]]]]));
console.log("[1,2,3]", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// OPTIMIZE
// time - O(n)
//  because each element is only touched once, time is n
//  but it also depends exactly on how the array is organized
//  so for now, n
// space -  O(n)
//  n is size of call stack
//  n is also the new array I have created (flarArr)
