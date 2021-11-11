// PROMPT
// Write a function called power which accepts a base and an exponent. The function should
// return the power of the base to the exponent. This function should mimic the
// functionality of Math.pow() - do not worry about negative bases and exponents.

// RESTATE
// Given a base and an exponent, return the power

// EXAMPLE
// (2,0) => 1
// (2,2) => 4
// (2,4) => 16

// APPROACH
// Use recursion
// Set up a base case where if the second argument is 0, return 1
// Set up a recursive case where you multiply the base by the return of
// the function being called on the base and the exponent - 1
// By the end the power will be the base multiplied the correct number of times

// CODE
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// TEST
console.log("1", power(2, 0));
console.log("4", power(2, 2));
console.log("16", power(2, 4));

// OPTIMIZE
// time - O (n)
//  the exponent gets smaller, so n is the number of times the function gets called
// space - O (n)
//  where n is the size of the call stack
