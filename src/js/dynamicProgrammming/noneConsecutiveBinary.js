/*
It is really a straight up fibonacci series with values
1:  0, 1
2:  00, 01, 11
3:  000, 001,010,100,101,110, 111

 */
let getTotal = ( n ) => {

    if ( n <= 0 ) {
        return 1
    } else if ( n === 1 ) {
        return 2;
    }
    return getTotal(n - 1 ) + getTotal( n - 2);
}

console.log( getTotal( 4 ));