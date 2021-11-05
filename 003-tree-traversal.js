// PROMPT
// Today you will write a series of iterator functions for trees.
// breadthFirst, depthFirstPreOrder, depthFirstPostOrder
// Each of these function will take a node of the tree and a callback.
// The function will iterate through the child nodes, calling the callback function on each of them.
// The difference between them is the order in which they iterate.

// SETUP
function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

// RESTATE
// Given the head node of a tree (not a bst) and a callback function, iterate through each
// node in the tree using the callback function.
// Iterate three separate ways: BFS, DFS(pre-order), DFS(post-order)

// EXAMPLES
// BFS -> a b c d e f g h i j k l m
// DFS PRE -> a b e k l c f g h m d i j
// DFS POST -> k l e b f g m h c i j d a

// APPROACH BFS
// Create a queue, visit a node, process it's value with the callback function
// If node in the queue has children, push children into the queue
// After processing with the callback and checking for children, get rid of the node
// DFS POST

// CODE BFS
let bfsArray = [];

function bfsTraversal(node, visitNode = (node) => bfsArray.push(node)) {
  let queue = [node];
  while (queue.length >= 1) {
    let firstNode = queue[0];
    visitNode(firstNode.value);
    if (firstNode.children) {
      for (let child of firstNode.children) queue.push(child);
    }
    queue.shift();
  }
  return bfsArray;
}

// TEST BFS
console.log("alphabetical", bfsTraversal(a));

// OPTIMIZE BFS
// time - O (n^2)
//   while loop -> n
//   for loop -> n
//   push -> 1
//   shift -> n
// space - O (n)
//   array taking up more space as nodes are added
// I could do some clean up - use the spread operator instead of the if & loop
//   Time would not change because spread operator is also O(n)
// I could save time by not using an array/queue in this way, and by treating
//   it like a linked list. Will come back to refactor after I have reviewed linked lists!
// I also do not need to push into an array for the callback - could have just printed the values
//   but it looks prettier in an array for now...

/***********************************************************************************************/

// APPROACH DFS PRE
// Visit a node, process, go to first child, process
// If that child has a child, process, then next child, etc. etc.
// In other words...
// Process A, if children, loop through children and recurse to process each child

// CODE DFS PRE
let dfsArray = [];

function dfsTraversal(node, visitNode = (node) => dfsArray.push(node)) {
  visitNode(node.value);
  for (let i = 0; i < node.children.length; i++) {
    dfsTraversal(node.children[i], visitNode);
  }
  return dfsArray;
}

// TEST DFS PRE
console.log("pre order: a b e k l c f g h m d i j", dfsTraversal(a));

// OPTIMIZE BFS
// time - O (n)
//   for loop -> n
//   push -> 1
// space - O (log n)
//   recursion -> log n because the function gets called on smaller values each time around?
//     need to double check this ^

/***********************************************************************************************/

// APPROACH DFS POST
// Children first, then the parent
// In other words...
// Loop through and recurse with each child
// THEN process the nodes

// CODE DFS POST

let dfsPostArray = [];

function dfsPostTraversal(node, visitNode = (node) => dfsPostArray.push(node)) {
  for (let i = 0; i < node.children.length; i++) {
    dfsPostTraversal(node.children[i], visitNode);
  }
  visitNode(node.value);
  return dfsPostArray;
}

// TEST DFS POST
console.log("post order: k l e b f g m h c i j d a", dfsPostTraversal(a));

// OPTIMIZE DFS POST
// time - O (n)
//   for loop -> n
//   push -> 1
// space - O (log n)
//   recursion -> log n because the function gets called on smaller values each time around?
//     need to double check this ^
