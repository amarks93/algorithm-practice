// PROMPT
// https://www.algoexpert.io/questions/Minimum%20Waiting%20Time

// RESTATE
// Given an array. Waiting time for an index is the sum of all the nums before it.
// Find minimum waiting time for last index

// EXAMPLE
// [3, 2, 1, 2, 6] -> 17
// [2, 1, 1, 1] -> 6
// [4, 3, 1, 1, 3, 2, 1, 8] -> 45

// APPROACH
// Sort the array, because we don't want anyone to have to wait the duration of the last number
// Implement recursion so we can add up this last index's waiting time to the ones before it
// Base case - if length is 1, there is no waiting time, return 0
// Recursive case - loop through and add up all nums except the current one to find the waiting time
// Add this number to the return of all other cases

// CODE
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let waitingTime = 0;
  if (queries.length === 1) {
    return 0;
  }
  if (queries.length > 0) {
    for (let i = 0; i < queries.length - 1; i++) {
      waitingTime += queries[i];
    }
  }
  return (waitingTime += minimumWaitingTime(queries.slice(0, -1)));
}

// TEST
console.log("17", minimumWaitingTime([3, 2, 1, 2, 6]));
console.log("6", minimumWaitingTime([2, 1, 1, 1]));
console.log("45", minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8]));

// OPTIMIZE
// time -> O (n logn)
// space -> O (n)

// could optimize space by not using recursion
// could have multiplied the min waiting time of an index by 2, and then added the new num
// lather rinse repeat
