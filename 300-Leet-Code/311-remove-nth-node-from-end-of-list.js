// PROMPT
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// CODE
var removeNthFromEnd = function (head, n) {
  let headCopy = head;
  let currentNode = head;

  // need to get the part of the linked list where the changes are going to be made
  while (n > 0) {
    headCopy = headCopy.next;
    n--;
  }
  // headCopy now only has node 3 4 and 5

  while (headCopy && headCopy.next) {
    currentNode = currentNode.next;
    headCopy = headCopy.next;
  }
  if (!headCopy) {
    head = head.next;
  } else {
    currentNode.next = currentNode.next ? currentNode.next.next : null;
  }
  return head;
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

console.log("1 2 3 5", removeNthFromEnd(head, 2));
