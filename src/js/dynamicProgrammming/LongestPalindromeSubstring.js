let longestPalindromeSubStr = ( str ) => {
    
    let n = str.length;

    // create two D array and fill with value with false
    // and fill with true in diagonal two D array since each character is a palindrome
    let res = [];
    for(let i=0; i < n; i++){
        res.push(new Array (n).fill(false));
        res[i][i] = true;
    }

    let max = 1;  //initialize max to 1. max will store the longest palindrome

    let lastIndex = 0;  //use to store the index where the palindrome is found

    //start with length at 2 and compare two character at a time until the end of the string
    for(let l = 2; l <= n; l++){

        //i starts at the first character
        for(let i=0; i < n - l + 1; i++){
            // j starts at the second character
            let j = i + l - 1;
            let len = 0;
            
            if( l == 2 ) {
                //if the len is equal to 2, and they are equal, we mark the res[i][j] to true and set len to 2
                if( str[i] == str[j] ) {
                    res[i][j] = true;
                    len = 2;
                }
            }else{
                //if len is more than two, we need to check res[i+1][j-1] is true
                //Ex: "abbababba". if first a and the last a are equal, we need to check if second b and the second b to the last are equal as well
                if(str[i] == str[j] && res[i+1][j-1]){
                    res[i][j] = true;
                    len = j - i + 1;
                }
            }
            if(len > max){
                max = len;
                lastIndex = i;
            }
        }
    }

    console.log( str.substr(lastIndex, max));  //print the longest palindrome
    return max;
}

//console.log(longestPalindromeSubStr("abba"));
//console.log(longestPalindromeSubStr("abbababba"));
//console.log(longestPalindromeSubStr("babcbaabcbaccba"));
console.log(longestPalindromeSubStr("cdbabcbabdab"));