let printPascalTriangle = ( num ) => {

    let res = [];
    for(let i=0; i<num; i++) {
        res.push( new Array(num).fill(0));
    }

    for (let line=0; line<num; line++) {
        let str = "";
        for ( let i=0; i<=line; i++) {
            if (line === 0 || i === 0 ) {
                res[line][i] = 1;
            } else {
                res[line][i] = res[line-1][i-1] + res[line-1][i];
            }
            str += " " + res[line][i];

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
