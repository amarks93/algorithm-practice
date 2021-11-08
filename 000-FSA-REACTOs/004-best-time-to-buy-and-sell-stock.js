// PROMPT
// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction
// (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// RESTATE
// Given an array that represents the stock market that week, pick a day to buy a share,
// and then a day to sell the share, so that you have max profit. Return that max profit.

// EXAMPLES
// [1,2,3,4,5] -> buy 1, sell 5 -> profit 4
// [5,4,3,2,1] -> 0 -> no profit possible, no transaction

// APPROACH
// Set current max profit to 0
// Gut approach - nested loop, subtract, find max
// OR store the lowest "buy" price in a variable
// set up a loop to go through the prices
// if the value is lower than the current lowest "buy price", replace
// subtract "buy price" from current index ("sell price") to get profit
// if profit is greater than max profit, replace

// CODE
function sellStock(stocks) {
  let maxProfit = 0;
  let lowestPrice = Infinity;
  for (let i = 0; i < stocks.length; i++) {
    let currentStock = stocks[i];
    if (currentStock < lowestPrice) lowestPrice = currentStock;
    if (currentStock - lowestPrice > maxProfit)
      maxProfit = currentStock - lowestPrice;
  }
  return maxProfit;
}

// TEST
console.log("5", sellStock([7, 1, 5, 3, 6, 4]));
console.log("0", sellStock([7, 6, 4, 3, 1]));

// OPTIMIZE
// time - O (n)
//   loop -> n
//   variable assignments -> 1
// space - O (1)
//   array does not change size -> 1
// do not need to optimize
