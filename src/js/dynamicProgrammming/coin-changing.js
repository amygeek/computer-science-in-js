/**
 Given denom denominations and total amount, find out the number of ways to make the change.
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


let coinChange = (denom, amount) => {
    let res = [];
    //preset to 0 for each
    for(let i=0; i<amount +1; i++) {
        res[i] = 0;
    }
    //this will be only selected if you don't select any coin
    res[0] = 1;

    for(let j=0; j<denom.length; j++) {
        for (let i=denom[j]; i< amount + 1; i++) {
            res[i] += res[i-denom[j]];
        }
    }
    return res[res.length-1];
}

let denom = [1, 2, 5];
//let denom = [1, 5, 10, 25];

//console.log(coinChange( denom, 100));  //242

console.log(coinChange( denom, 7));  //6