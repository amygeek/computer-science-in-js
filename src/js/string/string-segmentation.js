/**
 * We are given a dictionary of words and a large input string and we have to find out
 * whether the input string can be completely segmented into given dictionary words.
     Runtime Complexity
     Polynomial, O(n2).

     Memory Complexity
     Polynomial, O(n2).
 * @param s
 * @param dict
 * @param solved
 * @returns {boolean}
 */
let can_segment_string_rec = function(s, dict, solved) {
    for (let i = 1; i < s.length + 1; i++) {

        let first = s.substr(0, i);
        if (dict.has(first)) {

            let second = s.substr(i);

            if (second.length === 0 || dict.has(second)) {
                return true;
            }

            if (!solved.has(second)) {
                if (can_segment_string_rec(second, dict, solved)) {
                    return true;
                }
                solved.add(second);
            }
        }
    }

    return false;
};

let can_segment_string = function(s, dict) {
    let solved = new Set([]);
    return can_segment_string_rec(s, dict, solved);
};

let dict = new Set(['hello', 'hell', 'on', 'now']);

console.log(can_segment_string('hellonow', dict));  //true
console.log(can_segment_string('helloow', dict));  //false


let segStr = (s, dist, result) => {
    let len = s.length;

    if ( !len ) {
        return false;
    }

    for (let i= 1; i<len + 1; i++) {
        let first = s.substr(0, i);

        if ( dist.has(first)) {
            let second = s.substr(i);

            if( second.length === 0 || dist.has(second)) {
                return true;
            } else {
                if (!result.has(second)) {
                    if ( segStr( second, dist, result)) {

                        return true;
                    }
                    result.add(second);
                }
            }
        }

    }
    return false;
}

console.log(segStr('hellonow', dict, new Set()));  //true
