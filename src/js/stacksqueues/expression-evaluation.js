/**
 Given an arithmetic expression, evaluate it i.e. calculate its result.
 Let's assume that there are no parentheses in the expression and only binary operations ( +, -, *, / ) are allowed.

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Linear, O(n).

 Arithmetic expressions can be written in the following three forms.

 Infix: Operators are written between the operands, i.e. A + B
 Prefix: Operators are written before the operands, i.e. + A B
 Postfix: Operators are written after the operands, i.e. A B +

 * we'll use a two pass implementation to evaluate the expression.
 * In the first pass, we'll handle the '*' and '/' operators.
 * In the second pass, we'll handle the '+' and '-' operators.
 */
let is_operator = function(c) {
    return (c === '+' || c === '-' || c === '*' || c === '/');
};

let is_digit = function(ch) {
    return (ch >= '0' && ch <= '9');
};

let str_to_double = function(s, i) {
    let n = s.length;
    if (i >= n) {
        return null;
    }

    let temp = '';
    while (i < n && (s[i] === ' ' || s[i] === '\t')) {
        i++;
    }

    if (i >= n) {
        return null;
    }

    if (s[i] === '-') {
        temp += '-';
        i++;
    }

    while (i < n) {
        let ch = s[i];
        if (ch !== '.' && !is_digit(ch)) {
            break;
        }

        temp += ch;
        i++;
    }

    return {
        digit: parseFloat(temp),
        index: i
    };
};

let is_div_or_mul = function(ch) {
    return (ch === '*' || ch === '/');
};

let evaluate = function(expr) {

    let operators = [];
    let operands = [];

    let op = 0;
    let prev = 0;

    let i = 0;
    let n = expr.length;
    while (i < n) {
        let ch = expr[i];
        if (ch === ' ' || ch === '\t') {
            i++;
            continue;
        }

        if (is_operator(ch)) {
            op = ch;
            operators.push(ch);
            i++;
        } else {
            let re = str_to_double(expr, i);
            let d = re.digit;
            i = re.index;

            if (is_div_or_mul(op)) {
                operators.pop();
                let prev = operands.pop();
                let num = (op === '*') ? (prev * d) : (prev / d);
                operands.push(num);
                op = 0;
            } else {
                operands.push(d);
                //prev = d;
            }
        }
    }

    let t = (operands.length > 0) ? operands[0] : 0;
    i = 1;

    for (let k = 0; k < operators.length; k++) {
        let operator = operators[k];
        let operand = operands[i];
        t = (operator === '+') ? (t + operand) : (t - operand);
        i++;
    }
    console.log(t);
    return t;
};

evaluate("3+6*5-1/2.5");
