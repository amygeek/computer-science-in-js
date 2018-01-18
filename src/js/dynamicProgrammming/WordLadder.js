/*
 Word Ladder (Length of shortest chain to reach a target word)
 3.1
 Given a dictionary, and two words ‘start’ and ‘target’ (both of same length).
 Find length of the smallest chain from ‘start’ to ‘target’ if it exists, such that
 adjacent words in the chain only differ by one character and each word in the chain is a valid word i.e.,
 it exists in the dictionary. It may be assumed that the ‘target’ word exists in dictionary
 and length of all dictionary words is same.

 Example:

 Input:  Dictionary = {POON, PLEE, SAME, POIE, PLEA, PLIE, POIN}
 start = TOON
 target = PLEA
 Output: 7
 Explanation: TOON - POON - POIN - POIE - PLIE - PLEE - PLEA

 Time Complexity of the above code is O(n²m) where n is the number of entries originally in the dictionary and m is the size of the string
 */

/// A queue item to store word and minimum chain length to reach the word.
class Item {

    constructor(word, len) {
        this.word = word;
        this.len = len;
    }
}

class WordLadder {

    constructor( d ) {
        this.dictrionary = d;
        this.map = new Map();
    }

    //check both length of a and b. If the length differed by only 1 char, return true; otherwise return false
    isAdjacent ( a, b ) {
        let n = a.length;
        let count = 0;

        for ( let i=0; i<n; i++ ) {

            if ( a[i] != b[i]) {
                count++;
            }
            if ( count > 1 ) {
                return false;
            }
        }

        return (count === 1) ? true: false;
    }

    shortestChainLen (start, target ) {
        let q = [];
        let n = this.dictrionary.size;
        let item = new Item(start, 1);
        q.push(item);

        while (q.length !== 0 ) {

            //remove item from front of the queue
            let current = q.shift();

            for( let val of this.dictrionary ) {

                if ( this.isAdjacent( current.word, val )) {

                    item.word = val;
                    item.len = current.len + 1;
                    q.push( item );

                    // Remove adjacent item from dictionary so that this word is not processed again.  This is like marking visited
                    this.dictrionary.delete(val);

                    console.log( item)
                    // If we reached target, return the length. we can also return the chained item list, we just need to loop through the item
                    if ( val === target ) {
                        return item.len;
                    }
                }


            }
        }

        return 0;
    }
}

// Output: 7
// Explanation: TOON - POON - POIN - POIE - PLIE - PLEE - PLEA
//let dict = new Set(["POON", "PLEE", "SAME", "POIE", "PLEA", "PLIE", "POIN"]);
//let start = "TOON";
//let target = "PLEA";

//"hit" -> "hot" -> "dot" -> "dog" -> "cog"  or hit -> hot -> lot -> log -> cog
let dict = new Set(["hot","dot","dog","lot","log","cog"]);
let start = "hit";
let target = "cog";
let wordLadder = new WordLadder( dict );
console.log( wordLadder.shortestChainLen ( start, target));