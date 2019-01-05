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

console.log(permute_string2('abc'))
/*
 Time Complexity: O(n*n!)
 A permutation, also called an “arrangement number” or “order,” is a rearrangement of the elements of an ordered list S
 into a one-to-one correspondence with S itself. A string of length n has n! permutation.

                               abc
             swap a&a       swap a&b       swap a&c
           abc              bac                 cba
 swap b&b  swap b&c  swap a&a swap a&c  swap b&b    swap b&a
       abc     acb      bac     bca         cba     cab
 */

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

let swap = ( str, a,  b) => {

    let temp = str[a];
    str[a] = str[b];
    str[b] = temp;

}
//console.time("permute_string");
//console.log( permute_string( 'abc' ));
//console.timeEnd("permute_string");

//console.time("permute_string2");
//console.log( permute_string2( 'abc' ));
//console.timeEnd("permute_string2");

permutation( 'abc'.split(""), 0 );

let perm = (str) => {
    let n = str.length;
    let used = [];
    let out = [];
    doPermutation(str, used, out, n, 0);
}

let doPermutation = (str, used, out, n, level) => {
    if (level === n) {
        console.log(out.join(''));
    }
    for (let i = 0; i < n; i++) {
        if (!used[i]) {
            out[level] = str[i];
            used[i] = 1;
            doPermutation(str, used, out, n, level + 1);
            used[i] = 0;
        }        
    }
}

console.log('perm: ');
perm('abc');


