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

let swap_char = (str, i, j) => {
    let arr = str.split('');
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr.join('');
};

let permute_string_rec = (str, start, end, perms) => {
    if (start === end) {
        perms.push(str);
        return;
    }
    for (let i = start; i < end + 1; i++) {
        let swapped_input = swap_char(str, start, i);
        permute_string_rec(swapped_input, start + 1, end, perms);
    }
};


let permute_string = (str) => {
    let perms = [];
    permute_string_rec(str, 0, str.length - 1, perms);
    return perms;
};

let perms = permute_string('abc');
console.log(perms);