// PROMPT
// Write a recursive function called fib which accepts a number and returns the nth
// number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence
// of whole numbers 1,1,2,3,5,8, ...which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers

// RESTATE
// Given a number, return the correct result of the fibonacci sequence at that point
// in the sequence. If it's the 2nd number, it's 1, if it's the 3rd, it's 2, etc.

// EXAMPLES
// 4 -> 3
// 10 -> 55
// 28 -> 317811
// 35 -> 9227465

// APPROACH
// Recursion
// Base case - if the input is 1, then we add 1, if input is 0, we add 0
// Recursive case - add together the fib of num - 1 and fib of the num - 2
//  bc in fibonacci, the num is the sum of the two previous
// We basically have to work backwards all the way until we get to the first numbers in the sequence
// We don't want to add "num" itself, we want to add the fib of "num", which means
// there will be a lotttt of calls on the call stack

// CODE
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

// TEST
console.log("3", fib(4));
console.log("55", fib(10));
console.log("317811", fib(28));
console.log("9227465", fib(35));

// OPTIMIZE
// time - O (2^n)
//  had to google this
// space - O (n)
//  the maximum depth of the call stack is proportional to n
// goal of this exercise was to do it recursively
