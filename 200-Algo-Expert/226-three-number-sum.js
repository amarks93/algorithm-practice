// PROMPT
// https://www.algoexpert.io/questions/Three%20Number%20Sum

// CODE
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      let first = array[i];
      let second = array[j];
      let third = array[k];
      const currentSum = first + second + third;
      if (currentSum === targetSum) {
        triplets.push([first, second, third]);
        j++;
        k--;
      } else if (currentSum > targetSum) {
        k--;
      } else if (currentSum < targetSum) {
        j++;
      }
    }
  }
  return triplets;
}

// TEST
console.log(
  "[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]***",
  threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
);
console.log("[]***", threeNumberSum([5, 6, 1, -9, 7, 3, 2], 35));
console.log(
  "[[ -3, 1, 12 ]]***",
  threeNumberSum([1, 15, -5, 12, -3, 6, 2], 10)
);
