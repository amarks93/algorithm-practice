// PROMPT
// https://leetcode.com/problems/middle-of-the-linked-list/
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// CODE
var middleNode = function (head) {
  const arrayOfNodes = [];
  while (head) {
    arrayOfNodes.push(head);
    head = head.next;
  }
  const midpoint = Math.ceil((arrayOfNodes.length - 1) / 2);
  return arrayOfNodes[midpoint];
};

// TEST
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log("3...", middleNode(head));
