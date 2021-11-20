// PROMPT
// Write a function naiveStringSearch that accepts two strings as inputs. Detemine if the second string
// appears in the first, and return the number of times it does.

// RESTATE
// Similar to 006-string-search. Finding a needle in a haystack.
// Return the number of needles in the haystack.

// EXAMPLES
// 'or', 'hello world' -> 1
// 'howdy', 'hello world' -> 0
// 'oox', 'ooboxoooxo' -> 1
// "an", "banana" -> 2

// APPROACH
// set up a variable for the count
// Nested loop, 1 with length of longer string - length of 2nd (bc you dont need to go  to end),
// 2nd with the shorter one
// check if characters from the 2nd string match up to the first
// if characters don't match, break out of the inner loop and move i forward
// if you get to the end of the 2nd string, that means there is a match, add 1 to count

// CODE
function naiveStringSearch(subString, string) {
  let count = 0;
  for (let i = 0; i < string.length - subString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] !== string[i + j]) break;
      if (j === subString.length - 1) count++;
    }
  }
  return count;
}

// TEST
console.log("1", naiveStringSearch("or", "hello world"));
console.log("0", naiveStringSearch("howdy", "hello world"));
console.log("1", naiveStringSearch("oox", "ooboxoooxo"));
console.log("2", naiveStringSearch("an", "banana"));

// OPTIMIZE
// time - O (n + m)
//  n -> length of first loop
//  m -> length of second loop
// space - O (1)
//  number -> constant
