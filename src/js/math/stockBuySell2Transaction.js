/*
 Maximum res by buying and selling a share at most twice
 In a daily share trading, a buyer buys shares in the morning and sells it on same day. If the trader is allowed to make
 at most 2 transactions in a day, where as second transaction can only start after first one is complete (Sell->buy->sell->buy).
  Given stock prices throughout day, find out maximum res that a share trader could have made.

 Examples:

 Input:   price[] = {10, 22, 5, 75, 65, 80}
 Output:  87
 Trader earns 87 as sum of 12 and 75
 Buy at price 10, sell at 22, buy at 5 and sell at 80

 Input:   price[] = {2, 30, 15, 10, 8, 25, 80}
 Output:  100
 Trader earns 100 as sum of 28 and 72
 Buy at price 2, sell at 30, buy at 8 and sell at 80

 Input:   price[] = {100, 30, 15, 10, 8, 25, 80};
 Output:  72
 Buy at price 8 and sell at 80.

 Input:   price[] = {90, 80, 70, 60, 50}
 Output:  0
 Not possible to earn.
 */

let maxProfit = ( price ) => {
    
    let n = price.length;

    // Create res array and initialize it as 0
    let res = new Array( n ).fill(0);
    

    /* Get the maximum res with only one transaction
     allowed. After this loop, res[i] contains maximum
     res from price[i..n-1] using at most one trans. */
    let maxPrice = price[n-1];
    for (let i=n-2; i>=0; i--) {
        // maxPrice has maximum of price[i..n-1]
        if (price[i] > maxPrice) {
            maxPrice = price[i];
        }

        // we can get res[i] by taking maximum of:
        // a) previous maximum, i.e., res[i+1]
        // b) res by buying at price[i] and selling at
        //    maxPrice
        res[i] = Math.max(res[i+1], maxPrice - price[i]);
    }

    //price:[10, 22, 5, 75, 65, 80] res: [ 75, 75, 75, 15, 15, 0 ]

    /* Get the maximum res with two transactions allowed. After this loop, res[n-1] contains the result */
    let minPrice = price[0];
    for (let i=1; i<n; i++) {
        // minPrice is minimum price in price[0..i]
        if (price[i] < minPrice) {
            minPrice = price[i];
        }


        // Maximum res is maximum of:
        // a) previous maximum, i.e., res[i-1]
        // b) (Buy, Sell) at (minPrice, price[i]) and add
        //    res to previous trans. stored in res[i]
        res[i] = Math.max(res[i-1], res[i] + (price[i] - minPrice) );
    }
    //get max iteration: [ 75, 75, 75, 15, 15, 0 ], after get min iteration:  [ 75, 87, 87, 87, 87, 87 ]
    let result = res[n-1];
    return result;
}

let prices = [10, 22, 5, 75, 65, 80];
//let prices = [2, 30, 15, 10, 8, 25, 80];
//let prices = [100, 30, 15, 10, 8, 25, 80];
//let prices = [90, 80, 70, 60, 50];
//let prices = [8, 10, 80, 2, 82];  //152, buy at 2, sell at 82, buy at 8 sell at 80

console.log("Max profit " + maxProfit(prices));