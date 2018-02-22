
// Program to find best buying and selling days

// Solution structure
class Interval {
    
    constructor() {
        this.buy = 0;
        this.sell = 0;
    }
}

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
let price = [2, 5, 7, 1, 4, 3, 1, 3];
let n = price.length;

// fucntion call
stock.stockBuySell(price, n);