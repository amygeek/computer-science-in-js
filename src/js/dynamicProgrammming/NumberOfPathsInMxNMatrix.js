


let countPathsRecursive = (n, m) => {
    if(n == 1 || m == 1){
        return 1;
    }
    return countPathsRecursive(n-1, m) + countPathsRecursive(n, m-1);
}

let countPaths = (n, m) => {

    let res = [];
    for (let i=0; i<n; i++) {
        res.push( new Array( m ));
    }

    for(let i=0; i < n; i++) {
        for(let j=0; j < m; j++){

            if ( i == 0 || j == 0 ) {
                res[i][j] = 1;
            } else  {
                res[i][j] = res[i-1][j] + res[i][j-1];
            }

        }
    }
    return res[n-1][m-1];
}

console.log( countPaths(4,4) );


