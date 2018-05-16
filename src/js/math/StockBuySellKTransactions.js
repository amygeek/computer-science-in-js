/*
 Maximum profit by buying and selling a share at most k times
 In share trading, a buyer buys shares and sells on future date. Given stock price of n days, the trader is allowed
 to make at most k transactions, where new transaction can only start after previous transaction is complete,
 find out maximum profit that a share trader could have made.

 Input:
 Price = [10, 22, 5, 75, 65, 80]
 K = 2
 Output:  87
 Trader earns 87 as sum of 12 and 75
 Buy at price 10, sell at 22, buy at
 5 and sell at 80

 K = 3
 Output:  97
 Trader earns 87 as sum of 12 + 70 + 15
 Buy at price 10, sell at 22,
 buy at 5 and sell at 75
 buy at 65 and sell at 80

 Input:
 Price = [12, 14, 17, 10, 14, 13, 12, 15]
 K = 3
 Output:  12
 Trader earns 12 as sum of 5, 4 and 3
 Buy at price 12, sell at 17, buy at 10
 and sell at 14 and buy at 12 and sell
 at 15

 Input:
 Price = [100, 30, 15, 10, 8, 25, 80]
 K = 3
 Output:  72
 Only one transaction. Buy at price 8
 and sell at 80.

 Input:
 Price = [90, 80, 70, 60, 50]
 K = 1
 Output:  0
 Not possible to earn.
 */

//Time complexity is O(kn) and space complexity is O(nk).

let maxProfit = ( prices, k) => {

    let n = prices.length;
    if (k == 0 || n == 0) {
        return 0;
    }
    let res = [];
    for(let i=0; i<= k; i++) {
        res.push( new Array( n ).fill(0) )
    }

    for (let i = 1; i <= k; i++) {

        let prevDiff = -prices[0];

        for (let j = 1; j < n; j++) {

            res[i][j] = Math.max(res[i][j-1], prices[j] + prevDiff);
            prevDiff = Math.max(prevDiff, res[i-1][j] - prices[j]);

        }
    }

    console.log(res)
    return res[k][prices.length-1];
}

//let prices = [12, 14, 17, 10, 14, 13, 12, 15];
let prices = [10, 22, 5, 75, 65, 80];
//let prices = [2, 30, 15, 10, 8, 25, 80];
//let prices = [100, 30, 15, 10, 8, 25, 80];
//let prices = [90, 80, 70, 60, 50];

console.log("Max profit " + maxProfit(prices, 3));