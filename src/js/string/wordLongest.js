//find the longest word made of other words:
// let arr = ["dogwalker", "dog", "cat", "walker", "lover", "dogcatlover"]  -> dogcatlover
class LongestWords {


    findLongestWords ( arr ) {

        //sort the arr in descending order
        arr.sort( (a, b) => {
            return (b.length - a.length );
        })

        let solved = new Set();

        for ( let s of arr ) {
            if ( this.containWord( arr, s, solved )) {
                console.log( s );
                return s;
            }
        }
    }

    containWord(arr, s, solved) {

        let len = s.length;

        for (let i= 1; i<=len; i++) {

            let first = s.substr(0, i);

            if ( arr.includes(first)) {

                let second = s.substr(i);

                if( second.length === 0 || arr.includes(second)) {
                    return true;
                } else {

                    if (!solved.has(second)) {
                        if ( this.containWord(arr, second, solved)) {

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
