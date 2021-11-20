// PROMPT
// Write a function that takes in a Binary Search Tree (BST) and a target integer value
// and returns the closest value to that target value contained in the BST

// RESTATE
// Given a BST and a target, find the closest value in the tree to the target

// EXAMPLES
// https://www.algoexpert.io/questions/Find%20Closest%20Value%20In%20BST

// APPROACH
// Set up variables for the currentNode, the current closest value, and the difference between that
// value and the target
// Use the root as the starting point
// Set up a while loop that will run as long as there is a current node
// if the current nodes value - the target is smaller than whatever is set as the current closest difference
// then replace it
// if the target is larger than the value, we only have to search the right half of the tree
// if the target is smaller than the value, we only have to search the left half of the tree

// CODE
function findClosestValueInBst(tree, target) {
  let closestValue = tree.value;
  let closestDifference = Math.abs(tree.value - target);
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(currentNode.value - target) < closestDifference) {
      closestValue = currentNode.value;
      closestDifference = Math.abs(currentNode.value - target);
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closestValue;
}

// TEST
// Tested on Algo Expert
// Calling below so the file is green and not red :sweat emoji:
findClosestValueInBst();

// OPTIMIZE
// time - O (log n)
//  we are eliminating half the tree with every loop
//  but if the tree only had one branch, then it would be O (n)
//  because half is never getting eliminated
// space - O (1)
//  all we store are values
