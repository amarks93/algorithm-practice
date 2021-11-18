// PROMPT
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object
// which may contain nested objects.

// RESTATE
// Given an object, find the sum of all even numbers within the object

// EXAMPLES
// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// nestedEvenSum(obj1); -> 6
// nestedEvenSum(obj2); -> 10

// APPROACH
// Loop through the keys of the object
// If the value is an even number, add to sum
// If the value is another object, recurse on that object and add to sum

// CODE
function nestedEvenSum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }
  }

  return sum;
}

// TEST
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log("6", nestedEvenSum(obj1));
console.log("10", nestedEvenSum(obj2));

// OPTIMIZE
// time - O(n)
// space - O(n)
