/**
 Runtime Complexity
 O(m.n) where m is number of rows and n is number of columns.

 Memory Complexity
 O(m + n
 * @param matrix
 */
let make_zeroes = function(matrix) {
    if (!matrix || matrix.length === 0) {
        return;
    }

    let zero_rows = new Set();
    let zero_cols = new Set();

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                if (!zero_rows.has(i)) {
                    zero_rows.add(i);
                }
                if (!zero_cols.has(j)) {
                    zero_cols.add(j);
                }
            }
        }
    }

    for (let r of zero_rows)  {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = 0;
        }
    }

    for ( let c of zero_cols) {
        for (let r = 0; r < rows; r++) {
            matrix[r][c] = 0;
        }
    }

    return matrix;
};

let matrix = [[1,7, 4, 5], [3, 0, 9, 10], [11, 12, 0, 19], [6, 2, 8, 28]];

console.log(make_zeroes(matrix));