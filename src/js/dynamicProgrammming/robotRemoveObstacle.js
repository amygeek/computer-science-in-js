// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED

function isFree(x, y, numRows, numColumns, lot)
{
    if(x >= 0 && x < numRows && y >= 0 && y < numColumns && lot[x][y] !== 0) {
        return true;
    }
    return false;
}
function removeObstacle(numRows, numColumns, lot)
{
    let res = [...Array(numRows)].map(e => [...Array(numColumns).fill(0)]);
    
    let move = 0;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            if (isFree(i-1, j, numRows, numColumns, lot )) {
                res[i-1][j] = 9;
                move++;
            } else if (isFree(i+1, j, numRows, numColumns, lot )) {
                res[i+1][j] = 9;
                move++;
            } else if (isFree(i, j-1, numRows, numColumns, lot )) {
                res[i][j-1] = 9;
                move++;
            } else if (isFree(i, j+1, numRows, numColumns, lot )) {
                res[i+1][j] = 9;
                move++;
            }
            
        }
    }
    
    if (res[numRows-1][numColumns-1] === 9) {
        return move;
    }
    
    return Number.MAX_VALUE;
    
}
// FUNCTION SIGNATURE ENDS

let lot = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]
];
console.log(removeObstacle(lot.length, lot[0].length, lot));