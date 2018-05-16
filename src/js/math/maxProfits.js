let stockPrice = [10, 5, 8, 9, 2, 20, 15, 1];
//stockPrice = [21, 12, 11, 9, 6, 3];

let getProfit = (arr) => {

    let currentBuy = arr[0];
    let currentSell = arr[1];
    let maxProfit = currentSell - currentBuy;

    for(let i=1, l=arr.length; i<l; i++) {
        
        let currentProfit = arr[i] - currentBuy;
        
        if ( currentProfit > maxProfit) {
            currentSell = arr[i];
            maxProfit = currentProfit;
        }

        if ( currentBuy > arr[i]) {
            currentBuy = arr[i];
        }
    }
    return [currentSell - maxProfit, currentSell];
}

console.log(getProfit(stockPrice));