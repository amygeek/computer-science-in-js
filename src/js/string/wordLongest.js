//find the longest word made of other words:
// let arr = ["dogwalker", "dog", "cat", "walker", "lover", "dogcatlover"]  -> dogcatlover
class LongestWords {


    findLongestWords ( arr ) {

        //sort the arr in descending order
        arr.sort( (a, b) => {
            return (b.length - a.length );
        })

        let solved = new Set();
        let dist = new Set( arr );

        for ( let s of arr ) {
            if ( this.containWord( s, dist, solved )) {
                console.log( s );
                return s;
            }
        }
    }

    containWord(s, dist, solved) {

        let len = s.length;

        for (let i= 1; i<=len; i++) {

            let first = s.substr(0, i);

            if ( dist.has(first)) {

                let second = s.substr(i);

                if( second.length === 0 || dist.has(second)) {
                    return true;
                } else {

                    if (!solved.has(second)) {
                        if ( this.containWord( second, dist, solved)) {

                            return true;
                        }
                        solved.add(second);
                    }
                }
            }

        }
        return false;
    }
}

let words = new LongestWords();

let arr = ["dogwalker", "dog", "cat", "walker", "lover", "dogcatlover"];

words.findLongestWords(arr);  //dogcatlover
