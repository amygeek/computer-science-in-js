/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    var sell = 0,
        prev_sell = 0,
        buy = Number.MIN_SAFE_INTEGER,
        prev_buy = 0;

    for (let i= 0, l=prices.length; i<l; i++) {
        prev_buy = buy;
        buy = Math.max(prev_sell - prices[i], prev_buy);
        console.log(`prev_sell - pricese[i]: ${prev_sell} - ${prices[i]}, prev_buy: ${ prev_buy}`)
        prev_sell = sell;
        sell = Math.max(prev_buy + prices[i], prev_sell);
        console.log(`prev_buy - pricese[i]: ${prev_buy} - ${prices[i]}, prev_sell: ${ prev_sell}`)

    }
    return sell;
};

var prices = [1, 2, 3, 0, 2];

console.log( "Maximum Profit of Stock is " + maxProfit(prices) );  //3
