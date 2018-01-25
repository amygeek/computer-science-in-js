
/*
 Given two dimensional matrix, write an algorithm to count all possible paths from top left corner to bottom-right corner.
 You are allowed to move only in two directions, move right OR move down.
 */
class NoOfPaths {

    count( arr, row, col){
        //base case
        //check if last row OR column is reached since after that only one path
        //is possible to reach to the bottom right corner.
        if( row == arr.length - 1 || col == arr.length - 1){
            return 1;
        }
        return this.count( arr, row + 1, col ) + this.count( arr, row, col + 1 );
    }
    
    countDP( arr ) {
    
        let n = arr.length;
    
        let res = [];
        for (let i=0; i<n; i++) {
            res.push( new Array(n) );
        }
    
        //base case: if we have one cell then there is only one way
        res[0][0] = 1;
    
        //no of paths to reach in any cell in first row = 1
        for (let i = 0; i < n ; i++) {
            res[0][i] = 1;
        }
    
        //no of paths to reach in any cell in first col = 1
        for (let i = 0; i < n ; i++) {
            res[i][0] = 1;
        }
    
        for (let i = 1; i < n ; i++) {
            for (let j = 1; j <n ; j++) {
                res[i][j] = res[i-1][j] + res[i][j-1];
            }
        }
    
        return res[n-1][n-1];
    }
    
    
}

let arr = [[ 1,1,1],
            [1,1,1],
            [1,1,1]];
let noOfPaths = new NoOfPaths();
console.log("No Of Path (Recursion): " + noOfPaths.count( arr, 0, 0));
console.log("No Of Path (DP): " + noOfPaths.countDP( arr ));
