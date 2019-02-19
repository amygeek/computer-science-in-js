let printPascalTriangle = ( n ) => {

    let res = [...Array(n)].map(e => [...Array(n).fill(0)]);
    
    for (let i=0; i<n; i++) {
        let str = "";
        for ( let j=0; j<=i; j++) {
            if (j === 0 || j === i ) {
                res[i][j] = 1;
            } else {
                res[i][j] = res[i-1][j-1] + res[i-1][j];
            }
            str += " " + res[i][j];

        }

        console.log(str);

    }
}

/*
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
 */
printPascalTriangle(5);
