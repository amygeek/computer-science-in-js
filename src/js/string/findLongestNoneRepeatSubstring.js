/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
 "pwke" is a subsequence and not a substring.
 */

let longestNoneRepeatSubstring = (str) => {

    let n = str.length;
    let map = new Map();
    let max = 0;
    
    for (let i = 0; i < n; i++) {

        if (map.has( str[i] )){
            max = Math.max(max, i - map.get(str[i]));
        }
        map.set(str[i], i);
    }

    return max;
}

// "abcabcbb" -> 3: abc
// "bbbbb"  -> 1: b
let str = "pwwkew";  // 3: wke   
console.log( longestNoneRepeatSubstring( str ) ); //