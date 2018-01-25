
/*
 Print all the paths from left top corner to right bottom corner in two dimensional array.
 As we need to explore all the paths from top left corner to bottom right corner, we will either travel down OR travel right.
 so every time either we increase the row or column.

 Recursion is the key here.
 Take the rows count and column counts say rowCount and colCount respectively
 Take currentRow =0 and currentColumn =0 and path =””
 Call printAll(currentRow, currentcolumn,path)
 Add array[0][0] to the path.
 Call recursively printAll(currentRow+1, currentcolumn,path)
 Call recursively printAll(currentRow, currentcolumn+1,path)
 Base Case 1: when currentRow = rowCount-1(because array index starts with 0) , print the rest of the columns, return
 Base Case 2: when currentcolumn = colCount-1(because array index starts with 0) , print the rest of the rows, return
 */
class PrintAllPathIn2DArray {
    
    constructor ( arr ) {
        this.arr = arr;
        this.rowCount = arr.length;
        this.colCount = arr[0].length;
    }
    
    printAll( currentRow, currentColumn, path) {
        if (currentRow == this.rowCount - 1) {
            for (let i = currentColumn; i < this.colCount; i++) {
                path += "-" + this.arr[currentRow][i];
            }
            console.log(path);
            return;
        }
        if (currentColumn == this.colCount - 1) {
            for (let i = currentRow; i <= this.rowCount - 1; i++) {
                path += "-" + this.arr[i][currentColumn];
            }
            console.log(path);
            return;
        }
        path = path + "-" + this.arr[currentRow][currentColumn];
        this.printAll(currentRow + 1, currentColumn, path);
        this.printAll(currentRow, currentColumn + 1, path);
        // this.printAll(currentRow + 1, currentColumn + 1, path);
    }
}



let a = [[ 1, 2, 3 ],
         [ 4, 5, 6 ]];
let path = new PrintAllPathIn2DArray( a );
path.printAll(0, 0, "");

