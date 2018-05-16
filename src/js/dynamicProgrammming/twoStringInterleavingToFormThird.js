/*
 Given three strings A, B and C. Write a function that checks whether C is an interleaving of A and B.
 C is said to be interleaving A and B, if it contains all characters of A and B and order of
 all characters in individual strings is preserved.
 */
let isInterleaved = (A, B, C) => {

    let m = A.length;
    let n = B.length;

    let res = [];
    for( let i=0; i<= m; i++ ) {
        res.push( new Array( n + 1 ).fill( false ) );
    }

    // C can be an interleaving of A and B only of sum of lengths of A & B is equal to length of C.
    if( m + n != C.length){
        return false;
    }

    for(let i=0; i <= m; i++){
        for(let j=0; j <= n; j++){

            let k = i + j -1;

            // two empty strings have an empty string as interleaving
            if(i == 0 && j == 0){

                res[i][j] = true;

            //compare B and C and fill out the result on the first row
            } else if (i == 0 && B[j-1] == C[k] ){

                res[i][j] = res[i][j-1];

            //compare A and C and fill out the result on the first column
            } else if (j == 0 && A[i-1] == C[k] ){

                res[i][j] = res[i-1][j];

            } else{
                res[i][j] = ( A[i-1] == C[k] ? res[i-1][j] : false ) || ( B[j-1] == C[k] ? res[i][j-1] : false );
            }
        }
    }
    console.log(res)
    return res[m][n];
}

//console.log( isInterleaved( A, B, C ) );

//console.log( isInterleaved("XXYM", "XXZT", "XXXZXYTM") );   //true
//console.log( isInterleaved("XXY", "XXZ", "XXZXXXY") );      //false
console.log( isInterleaved("XY" ,"WZ" ,"WZXY") );           //true
//console.log( isInterleaved ("XY", "X", "XXY") );            //true
//console.log( isInterleaved ("YX", "X", "XXY") );            //false
//console.log( isInterleaved ("XXY", "XXZ", "XXXXZY") );      //true