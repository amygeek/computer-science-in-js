
/*
 Find find best buying and selling days
 The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling in those days.
 For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0,
 selling on day 3. Again buy on day 4 and sell on day 6. If the given array of prices is sorted in decreasing order,
 then profit cannot be earned at all.
 */

// Solution structure
class Interval {
    
    constructor() {
        this.buy = 0;
        this.sell = 0;
    }
}

/*
 Time Complexity: The outer loop runs till i becomes n-1. The inner two loops increment value of i in every iteration.
 So overall time complexity is O(n)
 */
class StockBuySell {
    // This function finds the buy sell schedule for maximum profit
    stockBuySell(price, n) {
        // Prices must be given for at least two days
        if (n == 1)
            return;
    
        let count = 0;
    
        // solution array
        let res = [];
    
        // Traverse through given price array
        let i = 0;
        while (i < n - 1) {
            // Find Local Minima. Note that the limit is (n-2) as we are
            // comparing present element to the next element.
            while ((i < n - 1) && (price[i + 1] <= price[i])) {
                i++; 
            }
            
        
            // If we reached the end, break as no further solution possible
            if (i == n - 1)
                break;
        
            let e = new Interval();
            e.buy = i++;
            // Store the index of minima
        
        
            // Find Local Maxima.  Note that the limit is (n-1) as we are
            // comparing to previous element
            while ((i < n) && (price[i] >= price[i - 1])) {
                i++;
            }
            // Store the index of maxima
            e.sell = i-1;
            res.push(e);
        
            // Increment number of buy/sell
            count++;
        }
    
        // print solution
        if (count == 0) {
            console.log("There is no day when buying the stock " + "will make profit");
        } else {
            for (let j = 0; j < count; j++) {
                console.log("Buy on day: " + res[j].buy + "        " + "Sell on day : " + res[j].sell);
            }
        }

    }
}

let stock = new StockBuySell();

// stock prices on consecutive days
//let price[] = {100, 180, 260, 310, 40, 535, 695};
/*
Buy on day: 0        Sell on day : 2
Buy on day: 3        Sell on day : 4
Buy on day: 6        Sell on day : 7
*/
let price = [2, 5, 7, 1, 4, 3, 1, 3];
let n = price.length;
stock.stockBuySell(price, n);