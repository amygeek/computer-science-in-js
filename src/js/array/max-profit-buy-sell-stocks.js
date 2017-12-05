/**
 * Find maximum single sell profit
 * Given a list of stock prices for n days, find the maximum profit with a single buy/sell activity.
 * Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant, O(1).
 * @param array
 * @returns {*[]}
 */
let find_buy_sell_stock_prices = function(array) {
    if (!array || array.length < 2) {
        return;
    }

    let current_buy = array[0];
    let global_sell = array[1];
    let global_profit = global_sell - current_buy;

    let current_profit = 0;

    for (let i = 1; i < array.length; i++) {
        current_profit = array[i] - current_buy;

        if (current_profit > global_profit) {
            global_profit = current_profit;
            global_sell = array[i];
        }

        if (current_buy > array[i]) {
            current_buy = array[i];
        }

    }

    return [global_sell - global_profit, global_sell];
};

let arr = [12, 5, 9, 19];
console.log(find_buy_sell_stock_prices(arr));  //[5, 19] buy at 5; sell at 19

arr = [21, 12, 11, 9, 6, 3];
let stockPrice = [10, 5, 8, 9, 2, 20, 15, 30];

console.log(find_buy_sell_stock_prices(stockPrice));  //[12, 11] buy at 12; sell at 11

