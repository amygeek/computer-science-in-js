
/*
 Print all the paths from left top corner to right bottom corner in two dimensional array.
 As we need to explore all the paths from top left corner to bottom right corner, we will either travel down OR travel right.
 so every time either we increase the row or column.

 Recursion is the key here.
 Take the rows count and column counts say rowCount and colCount respectively
 Take row =0 and col =0 and path =””
 Call printAll(row, col,path)
 Add array[0][0] to the path.
 Call recursively printAll(row+1, col,path)
 Call recursively printAll(row, col+1,path)
 Base Case 1: when row = rowCount-1(because array index starts with 0) , print the rest of the columns, return
 Base Case 2: when col = colCount-1(because array index starts with 0) , print the rest of the rows, return
 */
class PrintAllPathIn2DArray {

    constructor ( arr ) {
        this.arr = arr;
        this.rowCount = arr.length;
        this.colCount = arr[0].length;
    }

    printAll( row, col, path) {
        if (row == this.rowCount - 1) {
            for (let i = col; i < this.colCount; i++) {
                path +=  this.arr[row][i] + " ";
            }
            console.log(path);
            return;
        }
        if (col == this.colCount - 1) {
            for (let i = row; i < this.rowCount; i++) {
                path += this.arr[i][col] + " ";
            }
            console.log(path);
            return;
        }
        path = path + this.arr[row][col] + " ";
        this.printAll(row + 1, col, path);
        this.printAll(row, col + 1, path);
        // this.printAll(row + 1, col + 1, path);
    }
}



let a = [[ 1, 2, 3 ],
         [ 4, 5, 6 ]];
let path = new PrintAllPathIn2DArray( a );
path.printAll(0, 0, "");

