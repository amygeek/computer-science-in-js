/*
 You are working on developing a movie with video and want to devise an application to easily break up individual shots in a video into scenes.
 There is already an algorithm that breaks the video up into shots (short sequences from a particular camera angle) and labels them.

 Write a function which will partition a sequence of labels into minimal subsequences so that no labels appear in more than one subsequence.
 The output should be the length of each subsequence.

 Input:
 The input to the function/method consists of an argument - inputList, a list of characters representing the sequence of shots.

 Output:
 Return a list of integers representing the length of each scene, in the order in which it appears in the given sequence of shots.

 Example:
 input: [a,b,c]
 output: [1,1,1]
 Input:
 inputList = [a,b,a,b,c,b,a,c,a,d,e,f,e,g,d,e,h,i,j,h,k,l,i,j]
 Output:
 [9, 7, 8]
 Explanation:
 The correct partitioning is:
 a,b,a,b,c,b,a,c,a,/d,e,f,e,g,d,e,/h,i,j,h,k,l,i,j
 To ensure that no label appears in more than one subsequence, subsequences are as small as possible, and subsequences partition the sequence.
 The length of these subsequences are 9, 7 and 8.
 */

let minCut = ( list ) => {

    let n = list.length;
    let res = [];
    let i = 0;
    let j = 1;

    //start in the first character
    while ( i < n )  { 

        let max = 0;  //store the current max length of the sequence
        let seq = []; // store the repeat label sequence

        for (j=i+1; j < n; j++ ) {

            //compare with the iTh character with the rest of characters and get the max length of the sequence that contains repeating labels
            if ( list[i] == list[j] ) {
                max = Math.max( max, j - i + 1 );
            }
        }
        if ( max !== 0 ) {

            //if max is not 0, that means we found the the sequence that contains repeating labels.
            //store the sequence for next letter lookup
            seq = list.slice( i, max + i);

            i = i + max; // i will be the next while loop iteration.

            //let's check the next char is that is in the sequence, if it is yes, we need increment max and i count
            while( i < n) {
                if ( seq.indexOf(list[i]) !== -1 ) {
                    max++;
                    i++;
                } else {
                    break;
                }

            }
            res.push( max );  //story the max in result

        } else {
            res.push(1);    //if there is no repeat label found, store 1 for each label
            i++;
        }
    }
    //we need to check result set if we found repeated sequence. If we found the sequence, and we need to add none repeated seq
    // to the last sequence
    for ( i=res.length-1; i>=0; i--) {
        // turn [ 9, 7, 4, 1, 1, 1, 1 ] into [ 9, 7, 8 ]
        if ( res[i] !== 1 ) {
            res[i] += res.length - i - 1;
            res = res.splice(0, i + 1);
            break;
        }
    }
   return res;
}

let minCut2 = (list) => {
    let len = list.length;
    let map = new Map();
    let res = [];
    let last = 0;
    // loop through the list and 
    for(let i = 0; i < len; i++) {
        // check if the character is in the map
        if (map.has(list[i])) {
            let c = map.get(list[i]);
            let end = i - c.start + 1;
            map.set(list[i], {start: c.start, end: end});
            // let j = res.length - 1;
            // while ( j > 0 && res[j] === 1) {
            //     res.pop();
            // }
            // res.push(end);
        } else {
            map.set(list[i], {start: i, end: i + 1});
            res.push(1);
        }
    }

    return res.join(', ');
}

let arr = ["a","b","a","b","c","b","a","c","a","d","e","f","e","g","d","e","h","i","j","h","k","l","i","j"];

console.log('["a","b","a","b","c","b","a","c","a","d","e","f","e","g","d","e","h","i","j","h","k","l","i","j"] ->');

// console.log( 'minCut: ', minCut(arr) ); // [9, 7, 8]
console.log( 'minCut2: ', minCut2(arr) ); // [9, 7, 8]


// arr = ['a', 'b', 'c', 'e', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e'];
// console.log("['a', 'b', 'c', 'e', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e'] ->");
// console.log( 'minCut: ', minCut(arr) );  // [12]
// console.log( 'minCut2: ', minCut2(arr) );  // [12]


// arr = ['a', 'b', 'c','a'];
// console.log("['a', 'b', 'c','a'] ->");
// console.log('minCut: ', minCut(arr) );  // [4]
// console.log('minCut2: ', minCut2(arr) );  // [4]


// arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e'];
// console.log("['a', 'b', 'c', 'd', 'a', 'e', 'f', 'g', 'h', 'i', 'j', 'e'] ->");
// console.log('minCut: ', minCut(arr) );  // [5, 7]
// console.log('minCut2: ', minCut2(arr) );  // [5, 7]

// arr = ['a', 'b', 'c', 'd'];
// console.log("['a', 'b', 'c', 'd'] ->");
// console.log('minCut: ', minCut(arr) );  // [1, 1, 1, 1]
// console.log('minCut2: ', minCut2(arr) );  // [1, 1, 1, 1]