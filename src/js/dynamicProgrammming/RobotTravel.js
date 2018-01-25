
/*
 Given two dimensional matrix, write an algorithm to count all possible paths from top left corner to bottom-right corner.
 You are allowed to move only in two directions, move right OR move down. There are few obstructions as well,
 means few cells are blocked and you cannot travel that cell.

 Many times this problem is being referred as “Robot Travel Problem“. Given a 2d matrix, how many ways
 a robot can travel from top left corner to bottom right corner and there are few cells in which robot cannot travel.
 */
class RobotTravel {

    count( arr, row, col ){
        //base case
        //check if last row OR column is reached since after that only one path
        if(row == arr.length - 1 && col == arr.length - 1){
            return 1;
        }
    
        let left =0;
        let down = 0;

        if( row != arr.length - 1 && arr[row+1][col] != -1 ){
            left = this.count(arr, row + 1, col);
        }

        if( col != arr.length - 1 && arr[row][col+1] != -1){
            down = this.count(arr, row, col + 1);
        }
        return left + down;
    }
    
    countDP( arr ){
    
        let result = arr;
    
        for (let i = 1; i < arr.length ; i++) {
            for (let j = 1; j < arr.length ; j++) {
    
                if( result[i][j] != -1 ){
                    result[i][j] = 0;
    
                    if ( result[i-1][j] > 0 ) {
                        result[i][j] += result[i-1][j];
                    }
    
                    if ( result[i][j-1] > 0 ) {
                        result[i][j] += result[i][j-1];
                    }
    
                }
            }
        }
    
        return result[arr.length-1][arr.length-1];
    }
    
   
}



//        let arr [][] = [[1,  1, 1],
//                        [1, -1, 1],
//                        [1,  1, 1]];   // path 2

//        let arr [][] = [[1,  1, 1],
//                        [1,  1, 1],
//                        [1, -1, 1]];   // path 3

let arr = [[1,  1, 1],
            [1, -1, 1],
            [1, -1, 1]];   // path 1

let noOfPaths = new RobotTravel();
console.log("No Of Path (Recursion): " + noOfPaths.count( arr, 0, 0));
console.log("No Of Path (DP) " + noOfPaths.countDP( arr ));
