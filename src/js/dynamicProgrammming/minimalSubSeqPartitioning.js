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

let lengthOfLongestSubstring2 = (s) => {
    let n = s.length;
    let map = new Map();
    let res = 0, i = 0, j = 0;
    // try to extend the range [i, j]

    for ( j = 0, i = 0; j < n; j++) {
        if (map.has( s[j] )){
            i = Math.max(map.get(s[j]), i);
        }
        res = Math.max(res, j - i + 1);
        map.set(s[j], j + 1);
    }
    console.log(map)
    return res;
}

let arr = ["a","b","a","b","c","b","a","c","a","d","e","f","e","g","d","e","h","i","j","h","k","l","i","j"];
//let arr = ["a","b","c"];

let minCut = ( arr ) => {

    let n = arr.length;
    let map = new Map();
    let res = 0, i = 0, j = 0;
    // try to extend the range [i, j]
    let start = 0;

    for ( j = 0, i = 0; j < n; j++) {
        if (map.has( arr[j] )){
            i = Math.max(map.get(arr[j]), i);
            //console.log(map)
        } else {
            start = Math.max(start, i);

            console.log(start)
        }
        res = Math.max(res, j - i + 1);

        map.set(arr[j], j + 1);
    }

    //console.log(map)
    return res;
}

console.log( minCut(arr) );

