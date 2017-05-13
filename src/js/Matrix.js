class Matrix {
    constructor() {
        this.g = [
            [1,2,3, 4],
            [5,6,7,8],
            [9,10,11,12]
        ];
    }
    
    isValid(g, row, col) {
        return row >= 0 && col >= 0 && row < g.length && col < g[0].length;
    }
    
    valueIn(g, row, col) {
        if ( this.isValid(g, row, col) ) {
            return g[row][col];
        } else {
            return 0;
        }
    }
    
    sumAround(g, row, col) {
        return this.valueIn (g, row - 1, col) + this.valueIn (g, row + 1, col) + this.valueIn (g, row, col - 1) + this.valueIn (g, row, col + 1)
        
    }
    
    //check if a given column contains a value
    colContains(g, col, value) {
        for( let row = 0, len = g.length; row < len; row++ ) {
            if ( g[row][col] === value ) {
                return true;
            }
        }
        return false;
    }
    
    //return number of columns that contain a value
    numColsWith( g, value) {
        if ( g.length === 0 ) {
            return 0;
        }
        let count = 0;
        for( let col = 0, len = g[0].length; col < len; col++ ) {
            if ( this.colContains( g, col, value ) ) {
                count++;
            }
        }
        return count;
    }
    
    addAll ( g ) {
        let sum = 0;
        for( let row = 0, len = g.length; row < len; row++ ) {
            for( let col = 0, len = g[0].length; col < len; col++ ) {
                sum += g[row][col];
            }
        }
        return sum;
    }
    
    countNegative(g, row, col) {

        let count = 0; // initialize result

        // Start with top right corner
        let i = 0;      // init row count
        let j = col - 1   // init column count

        // Follow the path shown using arrows above
        while ( j >= 0 && i < row ) {

            if ( g[i][j] < 0 ) {
                // j is the index of the last negative number
                // in this row.  So there must be ( j+1 )
                count += (j + 1);

                // negative numbers in this row.
                // move down the row
                i++;
            } else {
                // move to the left and see if we can
                // find a negative number there
                j--;
            }
        }

        return count
    }
}

export default Matrix;