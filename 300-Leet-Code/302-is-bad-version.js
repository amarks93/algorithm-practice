// PROMPT
// https://leetcode.com/problems/first-bad-version/
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// My make shift helper function to take the place of API calls for the purposes of running locally
// in this file...
function isBadVersion(num) {
  switch (num) {
    case 1:
      return false;
    case 2:
      return false;
    case 3:
      return false;
    case 4:
      return true;
    case 5:
      return true;
    default:
      return false;
  }
}

// CODE
var solution = function (isBadVersion) {
  return function (n) {
    let p1 = 1;
    let p2 = n;
    let currentFalse;
    while (p1 <= p2) {
      let mid = Math.floor((p1 + p2) / 2);
      if (isBadVersion(mid)) {
        currentFalse = mid;
        p2 = mid - 1;
      } else {
        p1 = mid + 1;
      }
    }
    return currentFalse;
  };
};

// TEST
console.log("4", solution(isBadVersion)(5));
