/**
 Given coins denominations and total amount, find out the number of ways to make the change.
 EX, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.

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
 O(m n) where m is number of denominations and n is amount.

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

let coins = [1, 2, 5];
//let coins = [1, 5, 10, 25];

//console.log(coinChange( coins, 100));  //242

console.log(coinChange( coins, 7));  //6