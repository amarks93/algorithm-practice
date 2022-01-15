// PROMPT
// Write a functoin that takes in an array of at least three ingegers and, without sorting the
// input array, returns a sorted array of the three largest integers in the input array.
// The function should return duplicate integerf if necessary.
// https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

// CODE
function findThreeLargestNumbers(array) {
  let largest = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number >= largest[2]) {
      largest[0] = largest[1];
      largest[1] = largest[2];
      largest[2] = number;
      continue;
    } else if (number >= largest[1]) {
      largest[0] = largest[1];
      largest[1] = number;
      continue;
    } else if (number >= largest[0]) {
      largest[0] = number;
    }
  }
  return largest;
}

// TEST
console.log(
  "[18, 141, 541]",
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
