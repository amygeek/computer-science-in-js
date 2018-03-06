/**
 * We are given a dictionary of words and a large input string and we have to find out
 * whether the input string can be completely segmented into given dictionary words.
     Runtime Complexity
     quadratic, O(n2).

     Memory Complexity
     quadratic, O(n2).
 * @param s
 * @param dict
 * @param solved
 * @returns {boolean}
 */


let workBreak = function (s, dist, solved) {

    let len = s.length;

    for (let i= 1; i<=len; i++) {

        let first = s.substr(0, i);

        if ( dist.has(first)) {

            let second = s.substr(i);

            if( second.length === 0 || dist.has(second)) {
                //console.log( first + " " + second);
                return true;
            } else {
                if (!solved.has(second)) {
                    if ( workBreak( second, dist, solved)) {

                        return true;
                    }
                    solved.add(second);
                }
            }
        }

    }
    return false;
}

let dict = new Set(['hello', 'hell', 'on', 'now']);

console.log(workBreak('hellonow', dict, new Set()));  //true


let wordBreak = (str, dist, solved) => {
    let n = str.length;
    if ( !str || n == 0 ) {
        return;
    }
    for ( let i=1; i<n; i++) {
        let first = str.substr(0, i);
        if ( dist.has(first) ) {
            let second = str.substr(i);
            if (second.length === 0 || dist.has(second) ) {
                return true;
            }
            if ( !solved.has(second) ) {
                if ( wordBreak(second, dist, solved) ) {
                    return true;
                }
                solved.add(second);
            }
        }
    }
    return false;
}

console.log(workBreak('hellonow', dict, new Set()));  //true

