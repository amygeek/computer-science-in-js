let printPascalTriangle = ( num ) => {

    let res = [];
    for(let i=0; i<num; i++) {
        res.push( new Array(num).fill(0));
    }
    let str = "";
    for (let line=0; line<num; line++) {

        for ( let i=0; i<=line; i++) {
            if (line === 0 || i === 0 ) {
                res[line][i] = 1;
            } else {
                res[line][i] = res[line-1][i-1] + res[line-1][i];
            }
            str += " " + res[line][i];

        }

        console.log(str);
        str = "";
    }
}

printPascalTriangle(4);