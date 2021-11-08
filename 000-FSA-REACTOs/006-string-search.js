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
// Brute force approach:
// check if the inner loop (the needle) matches the outer loop (the string)
// first loop don't need to go all the way to the end
// if string's cur letter matches up to needles current letter, keep moving
// otherwise, break out
// if we make it to the end of the needle in the loop without breaking, then we have found
// the needle

// CODE
function indexOf(needle, string) {
  for (let i = 0; i < string.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (string[i + j] !== needle[j]) break;
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
//   loop -> O (n)
//   2nd loop of dif length -> O (m)
// space - O (1)
//   no NEW strings
// Might give this another go at a later time without nested loops?
//   I think if anything though time would be O (n) and space would increase
//   to O (n)...
