let replaceAt = function(str, i, char){
    return str.substr(0, i) + char + str.substr( i + char.length);
};

/**
 * Remove duplicate characters from a str.
 * For example, if the input str is "abbabcddbabcdeedebc",
 * after removing duplicates it should become "abcde".
     Runtime Complexity
     Linear O(n).

     Memory Complexity
     Linear, O(n).
 * @param s
 * @returns {str}
 */
let remove_duplicates_1 = function(s) {

    let hashset = new Set();

    let i = 0;

    while (i < s.length) {
        if (!hashset.has(s[i])) {
            hashset.add(s[i]);
        }
        i++;
    }

    return Array.from(hashset).join('');
};

//console.log(remove_duplicates_1("abbabcddbabcdeedebc"));

/**
     Runtime Complexity
     Quadratic, O(n2).

     Memory Complexity
     Constant, O(1).
 * @param str
 * @returns {str}
 */
let remove_duplicates_2 = function(str) {
    let write_index = 0;

    for (let i = 0; i < str.length; i++) {
        let found = false;

        for (let j = 0; j < write_index; j++) {
            if (str[i] === str[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            str = replaceAt(str, write_index, str[i]);
            write_index++;
        }

    }
    return str.substr(0, write_index);
};

console.log(remove_duplicates_2("abbabcddbabcdeedebc"))
