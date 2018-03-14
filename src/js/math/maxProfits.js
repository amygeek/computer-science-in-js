let stockPrice = [10, 5, 8, 9, 2, 20, 15, 1];
//stockPrice = [21, 12, 11, 9, 6, 3];

let maxProfit = (arr) => {

    let currentBuy = arr[0];
    let currentSell = arr[1];
    let maxP = currentSell - currentBuy;

    for(let i=1, l=arr.length; i<l; i++) {
        
        let currentP = arr[i] - currentBuy;
        
        if ( currentP > maxP) {
            currentSell = arr[i];
            maxP = currentP;
        }

        if ( currentBuy > arr[i]) {
            currentBuy = arr[i];
        }
    }
    return [currentSell - maxP, currentSell];
}

console.log(maxProfit(stockPrice));