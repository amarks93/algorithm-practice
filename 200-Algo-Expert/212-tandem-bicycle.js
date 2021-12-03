// PROMPT
// https://www.algoexpert.io/questions/Tandem%20Bicycle

// RESTATE
// Given two arrays representing bicycle riders' speeds, pair up the riders
// apppropriately to find either the maximum speed, or the minimum speed.
// The speed that is kept is always the largest between the two.
// Will also be given variable so we know which to return

// EXAMPLES
// {
//   "redShirtSpeeds": [5, 5, 3, 9, 2],
//   "blueShirtSpeeds": [3, 6, 7, 2, 1],
//   "fastest": true
// } -> 32 || if fastest is false -> 25
//

// APPROACH
// Sort the two arrays
// If we want the fastest speed, then the differences between the numbers
// should be maximized, in which case we would need to reverse one of the arrays
// to always get the maximum speed
// Check which of the two numbers at the same index point is larger, add that to a sum

// CODE
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let speed = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  fastest
    ? blueShirtSpeeds.sort((a, b) => b - a)
    : blueShirtSpeeds.sort((a, b) => a - b);
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    redShirtSpeeds[i] > blueShirtSpeeds[i]
      ? (speed += redShirtSpeeds[i])
      : (speed += blueShirtSpeeds[i]);
  }
  return speed;
}

// TEST
console.log("32", tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
console.log("25", tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
