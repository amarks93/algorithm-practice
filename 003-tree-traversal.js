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

// APPROACH
// BFS
//   Create a queue, visit a node, process it's value with the callback function
//   If node in the queue has children, push children into the queue
//   After processing with the callback and checking for children, get rid of the node
// DFS PRE
// DFS POST

// CODE
// BFS
function visitNode(node) {
  // log the function? store in an array?
  console.log(node);
}

function bfsTraversal(node) {
  let queue = [node];
  while (queue.length >= 1) {
    let firstNode = queue[0];
    visitNode(firstNode.value);
    if (firstNode.children) {
      for (let child of firstNode.children) queue.push(child);
    }
    queue.shift();
  }
}

// TEST
console.log("alphabetical", bfsTraversal(a));

// OPTIMIZE
