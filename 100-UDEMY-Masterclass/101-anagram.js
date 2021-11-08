// PROMPT
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranding the letters of another, such as cinema,
// formed from iceman

// RESTATE
// Given two strings, can the characters pf one of those strings be rearranged
// to turn into the other string

// EXAMPLES
// rat, car -> FALSE
// qwerty, qeywrt -> TRUE
// '', '' --> TRUE (empty strings are true)
// all lowercase, all a-z characters

// APPROACH
// create two objects, one for each string
// the object key is the letter, the value is the frequency
// match the two objects against each other
// if the key and value do not match, then it is not an anagram

// CODE
function validAnagram(str1, str2) {
  if (!str1.length && !str2.length) return true;

  let obj1 = {};
  let obj2 = {};

  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  for (let letter in obj1) {
    if (!obj2[letter]) return false;
    if (obj2[letter] !== obj1[letter]) return false;
  }

  return true;
}

// TEST
console.log("TRUE", validAnagram("", ""));
console.log("TRUE", validAnagram("texttwisttime", "timetwisttext"));
console.log("TRUE", validAnagram("mother", "thermo"));
console.log("FALSE", validAnagram("rat", "car"));
console.log("FALSE", validAnagram("anagrams", "nagaramm"));

// OPTIMIZE
// time - O (n)
//   object access - > 1
//   object insertion -> 1
//   3 loops -> 3n
// space - O (n)
//   strings -> n
//   objects -> n
// Another approach would be to nested loop and compare the characters to each other,
//   and then remove characters from the second string as I go to avoid counting the same letter twice
//   but then in time this would be O (n^2). Space would be O (n) even though there would be
//   no objects and the 2nd string would be decreasing in size
// However, I can make a few changes for clean up
//   I don't actually need 2 objects, I could just make 1 object, and then loop through the second string
//   and compare it to the object. If the letter is found, we subtract a frequency of 1

// CODE V2
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const memo = {};

  for (let letter of str1) {
    memo[letter] ? memo[letter]++ : (memo[letter] = 1);
  }

  for (let letter of str2) {
    if (!memo[letter]) return false;
    else memo[letter]--;
  }

  return true;
}

// TEST V2
console.log("TRUE", validAnagram2("", ""));
console.log("TRUE", validAnagram2("texttwisttime", "timetwisttext"));
console.log("TRUE", validAnagram2("mother", "thermo"));
console.log("FALSE", validAnagram2("rat", "car"));
console.log("FALSE", validAnagram2("anagrams", "nagaramm"));
