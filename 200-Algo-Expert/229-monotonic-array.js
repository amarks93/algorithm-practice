// PROMPT
// https://www.algoexpert.io/questions/Monotonic%20Array

// RESTATE
// Given an array, return a boolean representing whether or not the array is monotonic
// Monotonic meaning that the values either are always increasing and/or staying the same OR
// the values are always decreasing and/or staying the same

// EXAMPLE
// [-1, -5, -10, -1100, -1100, -1101, -1102, -9001] => true
// [-1, -5, -10, -1100, -900, -1101, -1102, -9001] => false

// APPROACH
// Compare two numbers to decide whether it falls into the category of "non-increasing" or "non-decreasing"
// After determining the category, we can loop through and do the following checks:
// Non-Increasing: make sure each subsequent number is less than or equal to the previious
// Non-Decreasing: make sure each subsequent number ir greater than or equal to the previous
// If the array length is less than or equal to 0, just return true

// CODE
function isMonotonic(array) {
  let type = "";
  array[0] < array[array.length - 1]
    ? (type = "nonDecreasing")
    : (type = "nonIncreasing");
  for (let i = 0; i < array.length - 1; i++) {
    if (type === "nonDecreasing") {
      if (array[i + 1] < array[i]) return false;
    } else if (type === "nonIncreasing") {
      if (array[i + 1] > array[i]) return false;
    }
  }
  return true;
}

// TEST
console.log(
  "true",
  isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])
);
console.log(
  "false",
  isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001])
);

// OPTIMIZE
// time - O(n)
// space - O(1)
