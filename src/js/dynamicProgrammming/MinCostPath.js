
/*
 We will fill this matrix in Bottom-up manner.

 Given: arrA[][].

 At every cell, we have two options (go right or down) and we will choose the minimum of these two.

 So for any i,j cell

 res[i][j] = m[0][j] if i=0 ,
 first row = m[i][0] if j=0,
 first column = m[i][j] + Min(res[i-1],[j] , res[i][j-1]) if i>0 && j>0

 See the code for better Explanation.
 Time Complexity: O(n2).
 */

let minCostPath = ( m ) => {
    let mLen = m.length;
    let res = [];

    for(let i=0; i<mLen; i++) {
        res.push(new Array( mLen ));
    }

    res[0][0] = m[0][0];
    // fill the first row. adding previous column value to each column. the last column in the first row will hold the total sum of the first row
    for (let i = 1; i < mLen; i++) {
        res[0][i] = m[0][i] + res[0][i - 1];
    }

    // fill the first column, adding previous row value to each row. the first column in the last row will hold hte total sum of the first column
    for (let i = 1; i < mLen; i++) {
        res[i][0] = m[i][0] + res[i - 1][0];
    }
    
    // path will be either from top or left, choose which ever is minimum
    for (let i = 1; i < mLen; i++) {
        for (let j = 1; j < mLen; j++) {
            res[i][j] = m[i][j] + Math.min(res[i - 1][j], res[i][j - 1]);
        }
    }
    console.log(res)
    return res[mLen - 1][mLen - 1];
}


 let m = [
    [1, 7, 9, 2],
    [8, 6, 3, 2],
    [1, 6, 7, 8],
    [2, 9, 8, 2]];

// path 1 7 6 3 2 8 2
console.log("Minimum Cost Path " + minCostPath(m));
