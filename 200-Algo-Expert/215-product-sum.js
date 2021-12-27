// PROMPT
// https://www.algoexpert.io/questions/Product%20Sum

// CODE
function productSum(array, depth = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      let newDepth = depth + 1;
      sum += productSum(element, newDepth);
    } else {
      sum += element;
    }
  }
  return sum * depth;
}

// TEST
console.log("18", productSum([1, 2, [3], 4, 5]));
console.log("12", productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
console.log(
  "1351",
  productSum([
    9,
    [2, -3, 4],
    1,
    [1, 1, [1, 1, 1]],
    [[[[3, 4, 1]]], 8],
    [1, 2, 3, 4, 5, [6, 7], -7],
    [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
    [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
    -3,
  ])
);
