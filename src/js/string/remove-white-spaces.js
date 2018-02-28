let replaceAt = function(str, i, char){
    return str.substr(0, i) + char + str.substr(i + char.length);
};

/**
 * Given a null terminated str, remove any white spaces (tabs or spaces).
 * All greek  to    me  --> Allgreektome

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).
 */
let remove_white_spaces = function(str) {
    let n = str.length;
    if (!str || n === 0) {
        return;
    }

    let i = 0;
    let j = 0;
    while (i < n) {

        if (str[i] != ' ' && str[i] != '\t') {
            str = replaceAt(str, j, str[i]);
            j++;
        }
        i++;
    }
    
    return str.substr(0, j);
};

console.log(remove_white_spaces('All greek  to    me'));

