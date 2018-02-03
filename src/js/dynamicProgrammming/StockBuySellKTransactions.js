let maxProfit = ( prices, k) => {
    if (k == 0 || prices.length == 0) {
        return 0;
    }
    let res = [];
    for(let i=0; i<= k; i++) {
        res.push( new Array( prices.length).fill(0) )
    }

    for (let i = 1; i < res.length; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < res[0].length; j++) {
            res[i][j] = Math.max(res[i][j-1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, res[i-1][j] - prices[j]);
        }
    }

    return res[k][prices.length-1];
}

let prices = [2, 5, 7, 1, 4, 3, 1, 3];

console.log("Max profit fast solution " + maxProfit(prices, 3));