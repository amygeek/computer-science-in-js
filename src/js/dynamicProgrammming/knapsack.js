/*
 Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
 In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated
 with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset
 of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item,
 either pick the complete item, or don’t pick it (0-1 property).

 Time Complexity: O(nW) where n is the number of items and W is the capacity of knapsack.

val = [60, 100, 120]
wt = [ 10, 20, 30]
solution: 220;
wt = 10; val = 60
wt = 20; val = 100
wt = 30; val = 120
wt = 20 + 10; val = 100 + 60
wt = 30 + 10; val = 120 + 60
wt = 30 + 20; val = 120 + 100

 */
let Knapsack = (val, wt, w) => {
    
    let n = val.length;
    let res = []
    for (let i=0; i<=n; i++) {
        res.push(new Array( w + 1));
    }
    
    for ( let i=0; i<=n; i++ ) {
        for (let j=0; j<=w; j++) {

            if ( i === 0 || j === 0 ) {
                res[i][j] = 0;
            } else if ( wt[i -1] <= j ) {
                res[i][j] = Math.max( res[i-1][j], val[i - 1] + res[i-1][j - wt[i-1]] )
            } else {
                res[i][j] = res[i-1][j];
            }
        }
    }
    return res[n][w];
}

//let val = [22, 20, 15, 30, 24, 54, 21, 32, 18, 25];
//let wt = [4, 2, 3, 5, 5, 6, 9, 7, 8, 10];
//let res = Knapsack(val, wt, 30);  //182
let val = [1,4,5,7];
let wt = [1,3,4,9];
let res = Knapsack(val, wt, 7);  //9

console.log(res);