/**
 * Find maximum single sell profit
 * Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.
 * We need to maximize the single buy/sell profit and in case we can't make any profit, we'll try to minimize the loss
 * Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant, O(1).
 A naive solution, O(n2), is to find the maximum gain between each element and its succeeding elements.

 There is a tricky linear solution of this problem that requires maintaining current buy price (which is the smallest number seen so far),
 current profit and global max profit as we iterate through the entire array of stock prices. At each iteration, we will compare the current profit
 with the global profit and update the global profit accordingly.

 Basic algorithm is as follows.
 current profit = INT_MIN
 current buy = stock_prices[0]
 global sell = stock_prices[1]
 global profit = global sell - current buy
 For i = 1 to stock_prices.length:
     current profit = stock_prices[i] - current buy
     if current profit is greater than global profit
        then update global profit to current profit and update global sell to stock_prices[i]
     if stock_prices[i] is less than current buy then update current buy to stock_prices[i]
 return global profit and global sell
 */
let find_buy_sell_stock_prices = function(array) {
    if (!array || array.length < 2) {
        return;
    }

    let currentBuy = array[0];
    let globalSell = array[1];
    let globalProfit = globalSell - currentBuy;

    let currentProfit = 0;

    for (let i = 1; i < array.length; i++) {
        currentProfit = array[i] - currentBuy;

        if (currentProfit > globalProfit) {
            globalProfit = currentProfit;
            globalSell = array[i];
        }

        if (currentBuy > array[i]) {
            currentBuy = array[i];
        }

    }

    return [globalSell - globalProfit, globalSell];
};

let arr = [12, 5, 9, 19];
console.log(find_buy_sell_stock_prices(arr));  //[5, 19] buy at 5; sell at 19


let stockPrice = [10, 5, 8, 9, 2, 20, 15, 30];
console.log(find_buy_sell_stock_prices(stockPrice));  //[2, 30] buy at 2; sell at 30

