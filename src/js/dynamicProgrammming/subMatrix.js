/**
 * Given a 2D boolean array, find the largest square subarray of
 * true values. The return value should be the side length of the
 * largest square subarray subarray 
 */

// Bottom up solution. Start from the upper left corner and compute each larger submatrix
let subMatrixDP = (arr) => {
    let m = arr.length;
    let n = arr[0].length;
    
    let res = [...Array(m)].map(e => [...Array(n)]);
    let max = 0;
    // Iterate over matrix to compute each value
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // If we’re in the first row/column then
            // the value is just 1 if that cell is
            // true and 0 otherwise. In other rows and
            // columns need to look up and to the left
            if (i == 0 || j == 0) {
                res[i][j] = arr[i][j] ? 1 : 0;
            } else if (arr[i][j]) {
                res[i][j] = 1 + Math.min( res[i][j-1], res[i-1][j], res[i-1][j-1]);
            }
            if (res[i][j] > max) {
                max = res[i][j];
            } 
        }
    }
    return max;
}

let arr = [
    [true, true, true, true, true],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, false, false, false, false]
];
console.log(subMatrixDP(arr));  // 4