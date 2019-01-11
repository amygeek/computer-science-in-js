/**
 * Given an input string, determine if it makes a valid number or not.
     4.325 is a valid number.
     1.1.1 is NOT a valid number.
     222 is a valid number.
     22. is NOT a valid number.
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

let getNextState = (currentState, ch) => {
    if (currentState === STATE.START || currentState === STATE.INTEGER) {
        if (ch === '.') {
            return STATE.DECIMAL;
        } else if (ch >= '0' && ch <= '9') {
            return STATE.INTEGER;
        } else {
            return STATE.UNKNOWN;
        }
    }
    if (currentState === STATE.DECIMAL) {
        if (ch >= '0' && ch <= '9') {
            return STATE.DECIMAL;
        } else {
            return STATE.UNKNOWN;
        }
    }
    return STATE.UNKNOWN;
};

let isValid = (s) => {
    let n = s.length;
    if (n === 0) {
        return true;
    }

    let i = 0;
    if (s[i] === '+' || s[i] === '-') {
        i++;
    }


    let currentState = STATE.START;

    for (let l = i; l < n; l++) {
        currentState = getNextState(currentState, s[l]);
        if (currentState === STATE.UNKNOWN) {
            return false;
        }
    }
    return true;
};

console.log(isValid('22.34'));
