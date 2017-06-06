/**
 * Given an input string, determine if it makes a valid number or not.
     4.325 is a valid number.
     1.1.1 is NOT a valid number.
     222 is a valid number.
     22. is a valid number.
     22.22. is NOT a valid number.

     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant, O(1).
 */
const STATE = {
    INTEGER: 'INTEGER',
    DECIMAL: 'DECIMAL',
    START: 'START',
    UNKNOWN: 'UNKNOWN'
};

let get_next_state = function(current_state, ch) {
    if (current_state === STATE.START || current_state === STATE.INTEGER) {
        if (ch === '.') {
            return STATE.DECIMAL;
        } else if (ch >= '0' && ch <= '9') {
            return STATE.INTEGER;
        } else {
            return STATE.UNKNOWN;
        }
    }
    if (current_state === STATE.DECIMAL) {
        if (ch >= '0' && ch <= '9') {
            return STATE.DECIMAL;
        } else {
            return STATE.UNKNOWN;
        }
    }
    return STATE.UNKNOWN;
};

let is_number_valid = function(s) {
    if (s.length === 0) {
        return true;
    }

    let i = 0;
    if (s[i] === '+' || s[i] === '-') {
        i++;
    }


    let current_state = STATE.START;

    for (let l = i; l < s.length; l++) {
        current_state = get_next_state(current_state, s[l]);
        if (current_state === STATE.UNKNOWN) {
            return false;
        }
    }
    return true;
};