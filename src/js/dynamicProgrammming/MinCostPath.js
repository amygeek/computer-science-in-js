
/*
 We will fill this matrix in Bottom-up manner.

 Given: arrA[][].

 At every cell, we have two options (go right or down) and we will choose the minimum of these two.

 So for any i,j cell

 res[i][j] = arr[0][j] if i=0 ,
 first row = arr[i][0] if j=0,
 first column = arr[i][j] + Min(res[i-1],[j] , res[i][j-1]) if i>0 && j>0

 See the code for better Explanation.
 Time Complexity: quadratic O(n2).
 */

let minCostPath = ( arr ) => {
    let n = arr.length;
    let res = [];

    for(let i=0; i<n; i++) {
        res.push(new Array( n).fill( 0 ) );
    }

    res[0][0] = arr[0][0];

    for (let i = 1; i < n; i++) {

        // fill the first row. adding previous column value to each column. the last column in the first row will hold the total sum of the first row
        res[0][i] = arr[0][i] + res[0][i - 1];

        // fill the first column, adding previous row value to each row. the first column in the last row will hold hte total sum of the first column
        res[i][0] = arr[i][0] + res[i - 1][0];

    }

    // path will be either from top or left, choose which ever is minimum
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            res[i][j] = arr[i][j] + Math.min(res[i - 1][j], res[i][j - 1]);
        }
    }
    console.log(res)
    return res[n - 1][n - 1];
}


 let arr = [
    [1, 7, 9, 2],
    [8, 6, 3, 2],
    [1, 6, 7, 8],
    [2, 9, 8, 2]];
/*
 [ [ 1, 8, 17, 19 ],
 [ 9, 14, 17, 19 ],
 [ 10, 16, 23, 27 ],
 [ 12, 21, 29, 29 ] ]
 Minimum Cost Path: 29

 path: 1 7 6 3 2 8 2
 */
console.log("Minimum Cost Path " + minCostPath(arr));
