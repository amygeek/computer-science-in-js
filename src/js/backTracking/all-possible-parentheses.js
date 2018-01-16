/**
 * Print all parentheses combinations for a given value 'n' such that they are balanced.

 Runtime Complexity
 Exponential.

 For more details about complexity, look at Catalan Numbers.

 Memory Complexity
 Linear, O(n).
 */

let print_all_parentheses_rec = function(n, left_count, right_count, output) {

    if (left_count >= n && right_count >= n) {
        console.log(output);
    }

    if (left_count < n) {
        output.push('{');
        print_all_parentheses_rec(n, left_count + 1, right_count, output);
        output.pop();
    }
    if (right_count < left_count) {
        output.push('}');
        print_all_parentheses_rec(n, left_count, right_count + 1, output);
        output.pop();
    }
};

let print_all_parentheses = function(n) {
    let output = [];
    print_all_parentheses_rec(n, 0, 0, output);
    return output;
};

let print_all_parentheses2 = (openP, closeP, str) => {

    if (openP === 0 && closeP === 0 ) {
        console.log(str);
    }

    if ( openP > closeP ) {
        return;
    }
    if ( openP > 0 ) {
        print_all_parentheses2( openP - 1, closeP, str + "(")
    }
    if ( closeP > 0 ) {
        print_all_parentheses2 ( openP, closeP - 1, str + ")");
    }
}

/*
 [ '{', '{', '{', '}', '}', '}' ]
 [ '{', '{', '}', '{', '}', '}' ]
 [ '{', '{', '}', '}', '{', '}' ]
 [ '{', '}', '{', '{', '}', '}' ]
 [ '{', '}', '{', '}', '{', '}' ]
 */
//console.log( print_all_parentheses( 3 ) );
/*
 [ '{', '{', '}', '}' ]
 [ '{', '}', '{', '}' ]
 */
print_all_parentheses2( 2, 2, "" ) ;