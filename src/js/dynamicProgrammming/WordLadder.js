/*
 Word Ladder (Length of shortest chain to reach a target word)

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

    /**
     * Map {
          'hit' => 1,
          'hot' => 2,
          'dot' => 3,
          'lot' => 3,
          'dog' => 4,
          'log' => 4,
          'cog' => 5 }
     convert map to 2D array
         [[ 'hit', 1 ],
         [ 'hot', 2 ],
         [ 'dot', 3 ],
         [ 'lot', 3 ],
         [ 'dog', 4 ],
         [ 'log', 4 ],
         [ 'cog', 5 ] ]
     */
    printResultWords( map ) {

        let newArr = Array.from(map);
        var concatenated = newArr.reduce(  (previous, current) => {

            //use the count as key, so it will return only the first word if the count is same
            if ( !previous.get(current[1])) {
                previous.set(current[1], current[0] );
            }

            return previous;

        }, new Map());

        for ( let [key, val] of concatenated) {
            console.log(val)
        }
    }

    ladderLen( beginWord, endWord, set) {

        if ( set.has( beginWord ) ) {
            set.delete( beginWord );
        }

        //create queue to store visited word
        let queue = [];

        //create a map to store visited level of each word
        let map = new Map();
        map.set(beginWord, 1);  //start at 1 for beginWord

        queue.push(beginWord);  //push beginWord to queue

        while ( queue.length !== 0 ) {

            let word = queue.shift();  //pull word from front of queue
            let current = map.get( word );  //get current level of the word

            //loop through each character on current word
            for (let i=0; i<word.length; i++ ) {

                //convert word to array
                let chars = word.split('');

                //loop through a to z
                for (let j='a'.charCodeAt(0); j<='z'.charCodeAt(0); j++ ) {

                    //transform each character in word with different character
                    chars[i] = String.fromCharCode(j);

                    //convert array back to string
                    let temp = chars.join('');

                    //check if set has the transformed string
                    if ( set.has( temp ) ) {
                        //if it is equal to endWord;
                        if ( temp === endWord ) {
                            //set the current level + 1 and print the words
                            map.set(temp, current + 1 );  //add the last word for printing
                            this.printResultWords( map );

                            return current + 1;  //return the len of word found
                        }
                        //set the current level + 1
                        map.set(temp, current + 1 );
                        //push temp to queue
                        queue.push(temp);
                        //delete visited word in the set
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
console.log( wordLadder.ladderLen ( start, target, dict) );