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


let minimalSubSeq = ( arr ) => {

    let n = arr.length;
    let res = [];
    let p = [];
    for (let i=0; i<n; i++) {
        res.push( new Array(n).fill(0) );
    }

    for (let l=2; l<=n; l++) {

        for (let i=0; i<n-l+1; i++) {

            let j = i + l - 1;

            if (arr[i] === arr[j]) {
                res[i][j] = j - i + 1;
                break;
            }
        }
    }

    p[0] = 1;
    let lastIndex = 0;

    for (let i=0; i<n; i++) {

        let max = 1;

        for(let j=0; j<n; j++) {
            if (res[i][j] > max) {
                if ( p.length === 1) {
                    max = res[i][j];
                } else {
                    max = max + res[i][j];

                }
                lastIndex = j;
            }
        }
        if (max > p[p.length-1]) {

            if ( p.length === 1) {

                p[p.length-1] = max;
                p.push(1);
            } else {
                p[p.length-1] = max;

            }

        }

    }

    if ( lastIndex < n && p[p.length-1] > 1 ) {
        p.push( n - lastIndex - 2);
    } else if ( lastIndex === 0 ) {
        //if lastIndex is not changed, that means all the characters in the array is unique, so we need to make the cut for each one of them.
        p = new Array(n).fill(1);
    }

    return p;

}

let arr = ["a","b","a","b","c","b","a","c","a","d","e","f","e","g","d","e","h","i","j","h","k","l","i","j"];
//let arr = ["a","b","c"];

console.log( minimalSubSeq(arr) );
