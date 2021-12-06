/* eslint-disable no-unused-vars */
// PROMPT
// https://www.algoexpert.io/questions/Depth-first%20Search

// RESTATE
// Given a tree, return an array of the values of each node in the tree. Use depth first search

// EXAMPLES
// Check algo expert prompt

// APPROACH
// Depth first search means process parent, then children if any from left to right
// The starting array is given, so I will push the parent nodes value into the array
// Then loop through its children, and for each child call the method on that child
// So that their value then gets pushed as well

// CODE
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // depth first search
    // process parent, left, then right
    array.push(this.name);
    for (let i = 0; i < this.children.length; i++) {
      let currentChild = this.children[i];
      currentChild.depthFirstSearch(array);
    }
    return array;
  }
}

// TEST
// Tested on Algo Expert

// OPTIMIZE
// Wasn't sure... Algo Expert answer is:
// time - O (v+e)
//  v is the number of vertices of the input graph
//  e is th enumber of edges of the input graph
// space - O (v)
