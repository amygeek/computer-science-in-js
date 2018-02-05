let maxTriangleSum = (tri,  m,  n) => {
    // loop for bottom-up calculation
    for (let i=m-1; i>=0; i--) {
        for (let j=0; j<=i; j++)
        {
            // for each element, check both
            // elements just below the number
            // and below right to the number
            // add the maximum of them to it
            if (tri[i+1][j] > tri[i+1][j+1])
                tri[i][j] += tri[i+1][j];
            else
                tri[i][j] += tri[i+1][j+1];
        }
    }

    // return the top element
    // which stores the maximum sum
    console.log( tri );
    return tri[0][0];
}

let minTriangleSum = (tri,  m,  n) => {
    // loop for bottom-up calculation
    for (let i=m-1; i>=0; i--) {
        for (let j=0; j<=i; j++)
        {
            // for each element, check both
            // elements just below the number
            // and below right to the number
            // add the maximum of them to it
            if (tri[i+1][j] < tri[i+1][j+1])
                tri[i][j] += tri[i+1][j];
            else
                tri[i][j] += tri[i+1][j+1];
        }
    }

    // return the top element
    // which stores the maximum sum
    console.log( tri )
    return tri[0][0];
}

let tri = [[1, 0, 0],
           [4, 8, 0],
           [1, 5, 3]];

console.log( maxTriangleSum ( tri, 2, 2))
//console.log( minTriangleSum ( tri, 2, 2))