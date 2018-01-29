/*
 Word Ladder (Length of shortest chain to reach a target word)
 3.1
 Given a dictionary, and two words ‘start’ and ‘target’ (both of same length).
 Find length of the smallest chain from ‘start’ to ‘target’ if it exists, such that
 adjacent words in the chain only differ by one character and each word in the chain is a valid word i.e.,
 it exists in the dictionary. It may be assumed that the ‘target’ word exists in dictionary
 and length of all dictionary words is same.

 beginWord = "hit"
 endWord = "cog"
 words = ["hot","dot","dog","lot","log","cog"]
 shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog"

 hit     hot     dot     dog     cog
                 lot     log
 1       2       3       4       5

        1      1
      2   3    2
    4  5   6   3

 Time Complexity of the above code is O(nm) where n is the number of entries originally in the dictionary and m is the size of the string
 */

class WordLadder {

    ladderLen( beginWord, endWord, set) {

        if ( set.has( beginWord ) ) {
            set.delete( beginWord );
        }

        let queue = [];

        let map = new Map();
        map.set(beginWord, 1);

        queue.push(beginWord);

        while ( queue.length !== 0 ) {

            let word = queue.shift();
            let current = map.get( word );

            for (let i=0; i<word.length; i++ ) {

                let chars = word.split('');

                for (let j='a'.charCodeAt(0); j<='z'.charCodeAt(0); j++ ) {

                    chars[i] = String.fromCharCode(j);

                    let temp = chars.join('');

                    if ( set.has( temp ) ) {
                        if ( temp === endWord ) {
                            return current + 1;
                        }
                        map.set(temp, current + 1 );
                        queue.push(temp);

                        set.delete(temp);
                    }
                }
            }
        }
        return 0;
    }
}

//"hit" -> "hot" -> "dot" -> "dog" -> "cog"  or hit -> hot -> lot -> log -> cog
let dict = new Set(["hot","dot","dog","lot","log","cog"]);
let start = "hit";
let target = "cog";
let wordLadder = new WordLadder();
console.log( wordLadder.ladderLen ( start, target, dict));