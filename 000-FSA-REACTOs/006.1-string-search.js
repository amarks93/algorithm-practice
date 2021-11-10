// AGAIN FOR REVIEW

// PROMPT
// You are attempting to find the index of the first appearance of one string (the needle) inside
// of another (the haystack).

// RESTATE
// Given a substring and a full string, find when the substring appears.
// If it doesn't, return -1

// EXAMPLES
// 'or', 'hello world' -> 7
// 'hello world', 'or' -> -1
// 'howdy', 'hello world' -> -1
// 'oox', 'ooboxoooxo' -> 6

// APPROACH
// Loop through the full string (only need to go to length - needle length otherwise will run out of letters)
// Nested loop through the "needle"
// Match up the letter at index i+j (because we want to make sure we dont always start at the beginning of the haystack)
// with the needle
// Once we hit a no match, break so we can go to next round in the loop
// If we ever make it to the end of the needle, we will know because we will have made it to the
// end of the loop, and so then we can return i
// If we get to the end of j and i and never get those matches, return -1

// CODE
function indexOf(needle, haystack) {
  for (let i = 0; i < haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (needle.length === j + 1) return i;
    }
  }
  return -1;
}

// TEST
console.log("7", indexOf("or", "hello world"));
console.log("-1", indexOf("hello world", "or"));
console.log("-1", indexOf("howdy", "hello world"));
console.log("6", indexOf("oox", "ooboxoooxo"));

// OPTIMIZE
// time - O (n + m)
//  two loops of different lengths
// space - O (1)
//  didn't create anything new
