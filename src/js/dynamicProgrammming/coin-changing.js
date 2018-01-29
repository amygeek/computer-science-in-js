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


let coinChange = (coins, amount ) => {
    
    // intialize an array of zeros with indices up to amount
    let res = new Array( amount + 1).fill(0);

    //this will be only selected if you don't select any coin
    res[0] = 1;
    

    for (let j = 0; j < coins.length; j++) {

        // we start bottom up, each time reducing change amount with current coin.
        for (let i = coins[j]; i <= amount; i++) {

            // ways to create change is equivalent to reducing the problem to a known problem
            // and gaining all the ways to solve for smaller problems
            res[i] = res[i] + res[i - coins[j]];
        }
    }

    return res[amount];
}

let coins = [1, 2, 5];
//let coins = [1, 5, 10, 25];

//console.log(coinChange( coins, 100));  //242

console.log(coinChange( coins, 7));  //6

//numOfCoins is length of the coins. since index starts at 0. if len of coins is 3, numOfCoins will be passed as 2
let coinChangeRec = (coins, numOfCoins, amount) => {

    if(amount === 0) return 1; // Perfect!

    if(amount < 0) return 0; // No res exists for negative amount

    if(numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!

    return coinChangeRec(coins, numOfCoins, amount - coins[numOfCoins]) + coinChangeRec(coins, numOfCoins - 1, amount);
}

console.log(coinChangeRec(coins, coins.length - 1, 7));

