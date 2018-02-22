/*
 Maximum path sum in a triangle.
 2.8
 We have given numbers in form of triangle, by starting at the top of the triangle and moving to adjacent numbers
 on the row below, find the maximum total from top to bottom.

 Examples:

 Input :
 3
 7 4
 2 4 6
 8 5 9 3
 Output : 23
 Explanation : 3 + 7 + 4 + 9 = 23

 Input :
 8
 -4 4
 2 2 6
 1 1 1 1
 Output : 19
 Explanation : 8 + 4 + 6 + 1 = 19
 */
let maxTriangleSum = ( tri,  m ) => {
    // loop for bottom-up calculation
    for (let i=m-1; i>=0; i--) {
        for (let j=0; j<=i; j++)
        {
            // for each element, check both
            // elements just below the number
            // and below right to the number
            // add the maximum of them to it
            if (tri[i+1][j] > tri[i+1][j+1]) {
                tri[i][j] += tri[i+1][j];
            } else {
                tri[i][j] += tri[i+1][j+1];
            }

        }
    }

    // return the top element which stores the maximum sum
    console.log( tri );
    return tri[0][0];
}

let minTriangleSum = (tri,  m) => {
    // loop for bottom-up calculation
    for (let i=m-1; i>=0; i--) {
        for (let j=0; j<=i; j++) {
            // for each element, check both
            // elements just below the number
            // and below right to the number
            // add the minimum of them to it
            if (tri[i+1][j] < tri[i+1][j+1]) {
                tri[i][j] += tri[i+1][j];
            } else {
                tri[i][j] += tri[i+1][j+1];
            }

        }
    }

    // return the top element which stores the minimum sum
    console.log( tri );
    return tri[0][0];
}

//let tri = [[2, 0, 0,0],
//           [5, 4, 0,0],
//           [5, 5, 7,0],
//           [1, 4, 8,3]];

let tri = [[1, 0, 0],
           [4, 8, 0],
           [1, 5, 3]];

console.log( maxTriangleSum ( tri, 2 ))
//console.log( minTriangleSum ( tri, tri.length - 1))