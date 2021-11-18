// PROMPT
// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

// RESTATE
// Given an object, return the same object, but with all numbers turned into strings
// Note: Do not modify existing object

// EXAMPLES
// let obj = {
//   num: 1, -> "1"
//   test: [],
//   data: {
//       val: 4, -> "4"
//       info: {
//           isRight: true,
//           random: 66 -> "66"
//       }
//   }
// }

// APPROACH
// Create new object
// Loop through the keys in the object
// If type of the value is a number, turn the number into a string
// If the type of is an object, need to recurse
//  note: double check that the object is not an array
// Add values to new object

// CODE
function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key] + "";
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// TEST
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

// OPTIMIZE
// time - O (n)
//  key in obj loop - n
//  accessing obj - 1
// space - O(n)
//  new object - n
//  call stack - n
