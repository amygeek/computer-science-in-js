
/*
 Given two dimensional matrix, write an algorithm to find out the snake sequence which has the maximum length.
 There could be many snake sequence in the matrix, you need to return the one with the maximum length.
 Travel is allowed only in two directions, either go right OR go down.

 What is snake sequence: Snake sequence can be made if number in adjacent right cell or number in the adjacent down cell
 is either +1 or -1 from the number in the current cell.
 */
class SnakeSequence {

    getMaxSequence( matrix ){

        let rows = matrix.length;
        let cols = matrix[0].length;
        let maxLenth =1;
        let maxRow = 0;
        let maxCol = 0;
    
        //create res matrix
        let res = [];
        for (let i=0; i<rows; i++ ) {
            res.push( new Array( cols).fill(0) );
        }
        //if no sequence is found then every cell itself is a sequence of length 1
        for (let i = 0; i <rows; i++) {
            for (let j = 0; j <cols; j++) {
                res[i][j] =1;
            }
        }
        
        for (let i = 0; i <rows ; i++) {
            for (let j = 0; j <cols ; j++) {
                if(i!=0 || j!=0){
                    //check from left
                    if(i>0 && Math.abs(matrix[i][j]-matrix[i-1][j])==1){
                        res[i][j] = Math.max(res[i][j], res[i-1][j]+1);
                        if(maxLenth<res[i][j]){
                            maxLenth = res[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
        
                    //check from top
                    if(j>0 && Math.abs(matrix[i][j]-matrix[i][j-1])==1){
                        res[i][j] = Math.max(res[i][j], res[i][j-1]+1);
                        if(maxLenth<res[i][j]){
                            maxLenth = res[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
            }
        }
    
        //Now we will check the max entry in the res[][].
        console.log("Max Snake Sequence : " + maxLenth);
        this.printPath(matrix, res, maxLenth, maxRow, maxCol);
        return 0;
    }
    
    printPath(matrix, res, maxLength, maxRow, maxCol){
        let len =  maxLength;
        let str = "";
        while(maxLength>=1){
            str += " - " + matrix[maxRow][maxCol];
            if(maxRow>0 && Math.abs(res[maxRow-1][maxCol]-res[maxRow][maxCol])==1){
                maxRow--;
            }else if(maxCol>0 && Math.abs(res[maxRow][maxCol-1]-res[maxRow][maxCol])==1){
                maxCol--;
            }
            maxLength--;
        }
        console.log(str);
    }
    
    
    
}


let arrA = [[1, 2, 1, 2],
            [7, 7, 2, 5],
            [6, 4, 3, 4],
            [1, 2, 2, 5]];
let snakeSequence = new SnakeSequence();
snakeSequence.getMaxSequence(arrA);
