// PROMPT
// https://www.algoexpert.io/questions/Class%20Photos

// RESTATE
// Given two arrays, one represents heights of blue shirts, one represents heights of red shirts
// Determine if one array has a larger value at each index than each value at each index in the other array
// Does not matter which array has the larger/taller values
// Return true if this is true, false if not

// EXAMPLE
// [5, 8, 1, 3, 4], [6, 9, 2, 4, 5] => true
// [6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9] => false

// APPROACH
// Sort both
// Loop through
// Compare at each index
// Set a variable for which array has the taller heights based on the first comparison
// If the following comparisons don't follow suit (eg, blue is taller than red, then red is taller than blue)
// then we know we need to return false, the criteria is just not possible
// Else, we are true

// CODE
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights = redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);
  let tallestGroup;
  let shortestGroup;
  if (redShirtHeights[0] > blueShirtHeights[0]) {
    tallestGroup = redShirtHeights;
    shortestGroup = blueShirtHeights;
  } else {
    tallestGroup = blueShirtHeights;
    shortestGroup = redShirtHeights;
  }

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (shortestGroup[i] >= tallestGroup[i]) {
      return false;
    }
  }
  return true;
}

// TEST
console.log("TRUE", classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
console.log("FALSE", classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]));

// OPTIMIZE
// time - O (n logn)
//  sort -> logn
//  loop -> n
// space - o (1)
