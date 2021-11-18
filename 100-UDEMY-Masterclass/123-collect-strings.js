// PROMPT
// Write a function called collectStrings which accepts an object and returns an array of all the
// values in the object that have a typeof string

// RESTATE
// Given an object, find all the strings and return them in an array

// EXAMPLES
// const obj = {
//   stuff: "foo",
//   data: {
//       val: {
//           thing: {
//               info: "bar",
//               moreInfo: {
//                   evenMoreInfo: {
//                       weMadeIt: "baz"
//                   }
//               }
//           }
//       }
//   }
// } ->  ["foo", "bar", "baz"]

// APPROACH
// Create a new array
// Loop through the keys in the object
// If the type of is a string, we can push it onto the array
// If it is not, then we will recurse on that value
// Concat the result onto the newArray
// Return the new array

// CODE
function collectStrings(obj) {
  let stringArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      stringArray.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      return stringArray.concat(collectStrings(obj[key]));
    }
  }
  return stringArray;
}

// TEST
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));

// OPTIMIZE
// time - O (n)
//  let key in obj loop - n
//  pushing onto array - 1
//  concat - m?
// space - O (n)
//  n is size of call stack
//  n is the new array
