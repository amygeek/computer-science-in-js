let replaceAt = function(str, i, char){
    return str.substr(0, i) + char + str.substr(i + char.length);
};

/**
 * Given a null terminated str, remove any white spaces (tabs or spaces).
 * All greek  to    me  --> Allgreektome
 * @param s
 * @returns {str}
 */
let remove_white_spaces = function(s) {

    if (!s || s.length === 0) {
        return;
    }

    let i = 0;
    let j = 0;
    while (i < s.length) {

        if (s[i] != ' ' && s[i] != '\t') {
            s = replaceAt(s, j, s[i]);
            j++;
        }
        i++;
    }
    
    return s.substr(0, j);
};

console.log(remove_white_spaces('All greek  to    me'));