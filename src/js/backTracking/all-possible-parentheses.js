/**
 * Print all parentheses combinations for a given value 'n' such that they are balanced.

 Runtime Complexity
 Exponential.

 For more details about complexity, look at Catalan Numbers.

 Memory Complexity
 Linear, O(n).
 */

let printParenthesesRec = function(n, left, right, output) {

    if (left >= n && right >= n) {
        console.log(output);
    }

    if (left < n) {
        output.push('{');
        printParenthesesRec(n, left + 1, right, output);
        output.pop();
    }
    if (right < left) {
        output.push('}');
        printParenthesesRec(n, left, right + 1, output);
        output.pop();
    }
};

let printParentheses = function(n) {
    let output = [];
    printParenthesesRec(n, 0, 0, output);
    return output;
};

let printParentheses2 = (openP, closeP, str) => {

    if (openP === 0 && closeP === 0 ) {
        console.log(str);
    }

    if ( openP > closeP ) {
        return;
    }
    if ( openP > 0 ) {
        printParentheses2( openP - 1, closeP, str + "(")
    }
    if ( closeP > 0 ) {
        printParentheses2 ( openP, closeP - 1, str + ")");
    }
}

/*
 [ '{', '{', '{', '}', '}', '}' ]
 [ '{', '{', '}', '{', '}', '}' ]
 [ '{', '{', '}', '}', '{', '}' ]
 [ '{', '}', '{', '{', '}', '}' ]
 [ '{', '}', '{', '}', '{', '}' ]
 */
//console.log( printParentheses( 3 ) );
/*
 [ '{', '{', '}', '}' ]
 [ '{', '}', '{', '}' ]
 */
printParentheses2( 2, 2, "" ) ;