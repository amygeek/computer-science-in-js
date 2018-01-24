/**
 * Implement a method to print all permutations of a given string.
 * Runtime Complexity
     Factorial, O(n!)

     Memory Complexity
     Linear, O(n)
 * @param string
 * @param index
 * @param character
 * @returns {string}
 */

let replaceAt = function(string, index, character){
    return string.substr(0, index) + character + string.substr(index+character.length);
}

let swap_char = function(input, i, j) {
    let temp = input[i];
    input = replaceAt(input, i, input[j]);
    input = replaceAt(input, j, temp);
    return input;
};


let permute_string_rec = (str, start, end, perms) => {

    if (start === end) {
        perms.push(str);
        return;
    }

    for (let i = start; i < end; i++) {

        let swapped_input = swap_char(str, start, i);

        permute_string_rec(swapped_input, start + 1, end, perms);
    }
};


let permute_string = (str) => {
    let perms = [];
    permute_string_rec(str, 0, str.length, perms);
    return perms;
};

let insertCharAt = (word, c, j) => {

    let start = word.substr(0, j);
    let end = word.substr(j);

    return start + c + end;
}

let permute_string2 = (str) => {
    let perms = []
    if(str.length == 0) {
        perms.push('');
        return perms;
    }

    let first = str.charAt(0);
    let remainder = str.substr(1);

    let words = permute_string2(remainder);

    for ( let word of words ){
        for(let i=0, l=word.length; i<=l; i++) {
            perms.push( insertCharAt(word, first, i));
        }
    };

    return perms;

}

let swap = ( str, a,  b) => {

    let temp = str[a];
    str[a] = str[b];
    str[b] = temp;

}

let permutation = (str, left) => {
    if (left == str.length) {
        console.log( str.join("") );
        return;
    }
    for (let i = left; i < str.length; i++) {
        swap(str, i, left);
        permutation(str, left + 1);
        swap(str, i, left); // backtrack
    }
}


console.log( permute_string( 'abc' ));


permutation( 'abc'.split(""), 0 );

