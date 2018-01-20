

class PascalTriangle {

    // A O(n^2) time and O(n^2) extra space method for Pascal's Triangle
    printPascal( n) {
        let arr = []; // An auxiliary array to store generated pscal triangle values
        for (let i=0; i<n; i++) {
            arr.push(new Array( n).fill(0));
        }
        // Iterate through every line and print integer(s) in it
        for (let line = 0; line < n; line++) {
        // Every line has number of integers equal to line number
            let str = "";
            for (let i = 0; i <= line; i++) {
            // First and last values in every row are 1
                if (line == i || i == 0) {
                    arr[line][i] = 1;
                } else {
                    // Other values are sum of values just above and left of above
                    arr[line][i] = arr[line - 1][i - 1] + arr[line - 1][i];
                }
                str += (arr[line][i]) + " ";
            }
            console.log(str);

        }
    }
    
    /****************************************************
     C(line, i)   = line! / ( (line-i)! * i! )
     C(line, i-1) = line! / ( (line - i + 1)! * (i-1)! )
     We can derive following expression from above two expressions.
     C(line, i) = C(line, i-1) * (line - i + 1) / i
    
     So C(line, i) can be calculated from C(line, i-1) in O(1) time
    
     A O(n^2) time and O(1) extra space function for Pascal's Triangle
     ****************************************************/
    printPascal2 ( n) {
        for (let line = 1; line <= n; line++)
        {
            let C = 1;  // used to represent C(line, i)

            for (let i = 1; i <= line; i++)
            {
                console.log(C);  // The first value in a line is always 1
                C = C * (line - i) / i;
            }
            console.log("\n");
        }
    }
    /*
     Given an index k, return the kth row of the Pascal's triangle. For example, when k = 3, the row is [1,3,3,1].
     */
    getRow( rowIndex ) {
        let result = [];
    
        if (rowIndex < 0)
            return result;

        result.push(1);
        for (let i = 1; i < rowIndex; i++) {
            for (let j = result.length - 2; j >= 0; j--) {
                result[j + 1] = result[j] + result[j + 1];
            }
            result.push(1);
        }
        return result;
    }
    test() {
        this.printPascal(4);
        let list = this.getRow(4);
        console.log(list);
    }
}

let pascalTriangle = new PascalTriangle();
pascalTriangle.test();