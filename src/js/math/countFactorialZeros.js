
let factorial2 = ( n, map) => {

    if (n == 1 ) {
        return 1;
    } else if (n > 1 ) {
        if ( !map.get( n ) ) {
            map.set( n, n * factorial2( n - 1, map) );
        }
        return map.get(n);
    } else {
        return -1;
    }

}

let factorial = ( n ) => {
    if (n == 1 ) {
        return 1;
    } else if ( n > 1 ) {
        return n * factorial(n - 1);
    } else {
        return -1;
    }
}

/*
to count the number of zeros, we only need to count the pairs of multiples of 5 and 2. There will always be more multiples of 2 than 5,
so simply counting the number of multiple of 5 is sufficient. One 'gotcha' here is 15 contributes a multiple of 5 and therefore one trailing zero
while 25 contributes two because 25 = 5*5
 */
let countFactorialZeros = ( n ) => {
    if ( n < -1 ) {
        return -1;
    }

    let count = 0;

    for ( let i=5; parseInt(n/i) > 0; i *= 5) {
        count += parseInt(n / i);
    }
    return count;
}

for (let i = 1; i < 26; i++) {
    console.log(i + "! (or " + factorial(i) + ") has " + countFactorialZeros(i) + " zeros");
}