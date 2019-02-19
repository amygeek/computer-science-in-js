let minesweeper = (arr) => {
    let m = arr.length;
    let n = arr[0].length;
    let res = [...Array(m)].map(e => [...Array(n).fill(0)]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
                        
            if (arr[i][j-1] === true) {
                res[i][j]++;
            }
            if (arr[i][j+1] !== undefined && arr[i][j+1] === true) {
                res[i][j]++;
            }
            if (arr[i-1] !== undefined && arr[i-1][j] === true) {
                res[i][j]++;
            }            
            if (arr[i+1] !== undefined && arr[i+1][j] === true) {
                res[i][j]++;
            }
            if (arr[i+1] !== undefined && arr[i+1][j+1] === true) {
                res[i][j]++;
            }
            if (arr[i+1] !== undefined && arr[i+1][j-1] === true) {
                res[i][j]++;
            }
            if (arr[i-1] !== undefined && arr[i-1][j+1] === true) {
                res[i][j]++;
            }
            if (arr[i-1] !== undefined && arr[i-1][j-1] === true) {
                res[i][j]++;
            }
        }
    }
    return res;
}

let arr = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
];
/**
  [[1,2,1],
   [2,1,1],
   [1,1,1]]
 */

console.log(minesweeper(arr));