/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
 "pwke" is a subsequence and not a substring.
 */

let lengthOfLongestSubstring = (s) => {
    let n = s.length;
    let set = new Set();
    let res = 0, i = 0, j = 0;

    while (i < n && j < n) {

        // try to extend the range [i, j]
        if (!set.has( s[j] )){
            set.add(s[j++]);
            res = Math.max(res, j - i);
        } else {
            set.delete(s[i++]);
        }
    }

    return res;
}

let lengthOfLongestSubstring2 = (s) => {

    let n = s.length;
    let map = new Map();
    let res = 0;
    // try to extend the range [i, j]

    for (let j = 0, i = 0; j < n; j++) {

        if (map.has( s[j] )){
            i = Math.max(map.get(s[j]), i);
        }
        res = Math.max(res, j - i + 1);
        map.set(s[j], j + 1);
    }

    return res;
}

let str = "abcabcbb";
console.log( lengthOfLongestSubstring2( str ) );