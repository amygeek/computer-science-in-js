

let countPathsRecursive = (n, m) => {
    if(n == 1 || m == 1){
        return 1;
    }
    return countPathsRecursive(n-1, m) + countPathsRecursive(n, m-1) + countPathsRecursive(n-1, m-1);
}

let countPaths = (m) => {

    let res = [];
    for (let i=0; i<m; i++) {
        res.push( new Array( m ));
    }

    for(let i=0; i < m; i++) {
        for(let j=0; j < m; j++){

            if ( i == 0 || j == 0 ) {
                res[i][j] = 1;
            } else  {
                res[i][j] = res[i-1][j] + res[i][j-1] + res[i-1][j-1];
            }

        }
    }
    return res[m-1][m-1];
}

console.log( countPaths( 4 ) );   // for 3 x 3 grid, path will be 6
console.log( countPathsRecursive( 4, 4 ) );   // for 3 x 3 grid, path will be 6


