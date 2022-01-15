// PROMPT
// https://www.algoexpert.io/questions/Branch%20Sums

// CODE
function branchSums(root) {
  let arrayOfSums = [];
  calculateBranchSums(root, 0, arrayOfSums);
  return arrayOfSums;
}

function calculateBranchSums(node, runningSum, arrayOfSums) {
  if (!node) return;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    arrayOfSums.push(newRunningSum);
    return;
  }

  calculateBranchSums(node.left, newRunningSum, arrayOfSums);
  calculateBranchSums(node.right, newRunningSum, arrayOfSums);
}

// TEST
const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: { value: 8, left: null, right: null },
      right: { value: 9, left: null, right: null },
    },
    right: {
      value: 5,
      left: { value: 10, left: null, right: null },
      right: null,
    },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

console.log("[15, 16, 18, 10, 11]", branchSums(root));
