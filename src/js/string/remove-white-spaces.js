let replaceAt = function(string, index, character){
    return string.substr(0, index) + character + string.substr(index + character.length);
};

/**
 * Given a null terminated string, remove any white spaces (tabs or spaces).
 * All greek  to    me  --> Allgreektome
 * @param s
 * @returns {string}
 */
let remove_white_spaces = function(s) {
    if (!s || s.length === 0) {
        return;
    }

    let read_ptr = 0;
    let write_ptr = 0;
    while (read_ptr < s.length) {
        if (s[read_ptr] != ' ' && s[read_ptr] != '\t') {
            s = replaceAt(s, write_ptr, s[read_ptr]);
            write_ptr++;
        }
        read_ptr++;
    }

    return s.substr(0, write_ptr);
};