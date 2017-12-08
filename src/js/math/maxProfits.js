let stockPrice = [10, 5, 8, 9, 2, 20, 15, 1];
//stockPrice = [21, 12, 11, 9, 6, 3];

let maxProfit = (arr) => {

    let currentBuy = arr[0];
    let currentSell = arr[1];
    let globalProfit = currentSell - currentBuy;

    for(let i=1, l=arr.length; i<l; i++) {
        let currentProfit = arr[i] - currentBuy;
        if ( currentProfit > globalProfit) {
            currentSell = arr[i];
            globalProfit = currentProfit;
        }

        if ( currentBuy > arr[i]) {
            currentBuy = arr[i];
        }
    }
    return [currentSell - globalProfit, currentSell];
}

console.log(maxProfit(stockPrice));