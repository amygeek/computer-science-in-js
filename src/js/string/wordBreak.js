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

        if ( dist.includes(first)) {

            let second = s.substr(i);

            if( second.length === 0 || dist.includes(second)) {
                // console.log( first + " " + second);
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

let dict = ['hello', 'hell', 'on', 'now'];

console.log(workBreak('hellonow', dict, new Set()));  //true
