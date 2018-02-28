/*
 find a substring of size K such that there is exactly one character that is repeated one;
 in other words, there should be k - 1 distinct characters in the substring.
 If no such substring can be found, return an empty list;
 if multiple such substrings exist, return all them, without repetitions. The order in which the substrings are does not matter.
 Input:
 The input to the function/method consists of two arguments - inputString,
 num an integer representing the number, K

 Output:
 Return a list of all substrings of inputString with K characters, that have k-1 distinct character i.e.
 exactly one character is repeated, or an empty list if no such substring exist in inputString.
 The order in which the substrings are returned does not matter.

 Constraints:
 The input integer can only be greater than or equal to 0 and less than or equal to 26 (0 <= num <= 26)
 The input string consists of only lowercase alphabetic characters.

 Example
 Input:
 inputString = awaglk
 num = 4

 Output:
 [awag]

 Explanation:
 The substrings are {awag, wagl, aglk}
 The answer is awag as it has 3 distinct characters in a string of size 4, and only one character is repeated twice.

 */

let findSubString = ( str, k) => {

    let n = str.length;

    for( let i=0; i<n - k + 1; i++ ) {
        
        let currentStr = str.substr( i, k);
        let map = new Map();

        for (let j=0; j<currentStr.length; j++) {

            let c = map.get(currentStr[j]);

            if ( c )  {
                map.set(currentStr[j], c + 1 );
            } else {
                map.set(currentStr[j], 1 );
            }
        }
        //if map size is 3, that means only one character is repeated
        if ( map.size === 3 ) {
            return currentStr;  //return it if we only care about finding one
        }
    }

}

console.log( findSubString("awaglk", 4) );  //awag

