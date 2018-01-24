/**
 Given coins coins and total amount, find out the number of ways to make the change.
 EX, we have coin coins 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.

 No. of ways to make the change
 1, 1, 1, 1, 1, 1, 1
 1, 1, 1, 1, 1, 2
 1, 1, 1, 2, 2
 1, 2, 2, 2
 1, 1, 5
 2, 5
 Total Methods
 6

 Runtime Complexity
 O(m n) where m is number of coins and n is amount.

 Memory Complexity
 Linear, O(n) where n is the amount.
 */


let coinChange = (coins, amount) => {

    //preset to 0 for each
    let res = new Array( amount + 1).fill(0);

    //this will be only selected if you don't select any coin
    res[0] = 1;

    for(let j=0; j<coins.length; j++) {
        for (let i=coins[j]; i <= amount; i++) {
            res[i] += res[ i - coins[j]];
        }
    }
    return res[res.length-1];
}

let coins = [1, 2];
//let coins = [1, 5, 10, 25];

//console.log(coinChange( coins, 100));  //242

console.log(coinChange( coins, 7));  //6

//numOfCoins is length of the coins. since index starts at 0. if len of coins is 3, numOfCoins will be passed as 2
let waysRec = (coins, numOfCoins, amount) => {

    if(amount === 0) return 1; // Perfect!

    if(amount < 0) return 0; // No solution exists for negative amount

    if(numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!

    console.log('checking ways to make ' + amount + ' with ' + coins.slice(numOfCoins));

    return waysRec(coins, numOfCoins, amount - coins[numOfCoins]) + waysRec(coins, numOfCoins - 1, amount);
}

console.log(waysRec(coins, coins.length - 1, 7));

let waysDP = (amount, coins) => {
    // intialize an array of zeros with indices up to amount
    var res = [];
    for (var i = 0; i <= amount; i++) {
        res[i] = 0;
    }
    // there is 1 way to renturn 0 cents
    res[0] = 1;

    for (var j = 0; j < coins.length; j++) {
        // we can only start returning change with coins in our coins
        var coin = coins[j];

        // we start bottom up, each time reducing change amout with curr coin.
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            // ways to create change is equivalent to reducing the problem to a known problem
            // and gaining all the ways to solve for smaller problems
            res[higherAmount] += res[higherAmountRemainder];
        }
    }

    return res[amount];
}

console.log(waysDP(100, [25, 1, 5, 10]));