// PROMPT
// Implement a function called, areThereDuplicates, which accepts a variable
// number of arguments, and checks whether there are any duplicates among the arguments
// passed in. You can solve this using the frequency counter pattern OR
// the multiple pointers pattern.

// RESTATE
// Given x number of arguments to a function, find out if any of those arguments
// are the same. Return true or false

// EXAMPLES
// 1, 2, 3 -> false
// 1, 2, 2 -> true
// a, b, c, a -> true

// APPROACH
// Using pointers for variety since I used frequency counter on 103
// Place all arguments in an array using spread operator
// Set up pointers i and j to see if the first two arguments are the same,
// move j down the line till you reach the end
// move i up and reset j
// basically nested loops without the loops

// CODE
function areThereDuplicates() {
  let variables = [...arguments];
  let p1 = 0;
  let p2 = p1 + 1;

  while (p2 < variables.length) {
    if (variables[p1] === variables[p2]) {
      return true;
    } else if (p2 === variables.length - 1) {
      p1++;
      p2 = p1 + 1;
    } else {
      p2++;
    }
  }

  return false;
}

// TEST
console.log("FALSE", areThereDuplicates(1, 2, 3));
console.log("TRUE", areThereDuplicates(1, 2, 2));
console.log("TRUE", areThereDuplicates("a", "b", "c", "a"));

// OPTIMIZE
// time - O (n)
//   loop -> n
// space - O (1)
//   adding numbers to variables -> 1
// My function is a little messy - I could have sorted the array first, and then I
//   would have avoided this issue of having to "reset the 'loop'" but then time
//   will be n log n because of the sort method
// Another option is to use "Set" since Set's do not take in duplicates.
//   If the length of the set is not the same as the length of the array, you know there
//   is a duplicate. Set will take up more space, but time is constant!

// CODE V2 - sorting first
function areThereDuplicates2(...args) {
  args = args.sort();
  let p1 = 0;
  let p2 = 1;
  while (p2 < args.length) {
    if (args[p1] === args[p2]) {
      return true;
    }
    p1++;
    p2++;
  }
  return false;
}

// TEST V2
console.log("FALSE", areThereDuplicates2(3, 2, 1));
console.log("TRUE", areThereDuplicates2(23, 1, 23, 106, 21, 106, 123, 14));
console.log("TRUE", areThereDuplicates2("a", "b", "c", "a"));

// CODE V3 - Set Size vs Array Length
function areThereDuplicates3() {
  const dupSet = new Set(arguments);
  return dupSet.size !== arguments.length;
}

// TEST V3
console.log("FALSE", areThereDuplicates3(3, 2, 1));
console.log("TRUE", areThereDuplicates3(23, 1, 23, 106, 21, 106, 123, 14));
console.log("TRUE", areThereDuplicates3("a", "b", "c", "a"));
