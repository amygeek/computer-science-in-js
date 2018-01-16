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
                continue;
            }
            
            if ( j - wt[i -1] >= 0 ) {
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
//let res = Knapsack(val, wt, 30);
let val = [1,4,5,7];
let wt = [1,3,4,9];
let res = Knapsack(val, wt, 7);

console.log(res);