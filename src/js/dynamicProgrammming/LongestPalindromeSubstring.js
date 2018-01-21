let longestPalindromeSubStr = ( str ) => {
    
    let n = str.length;
   
    let res = [];
    for(let i=0; i < n; i++){
        res.push(new Array (n).fill(false));
        res[i][i] = true;
    }

    let max = 1;
    
    for(let l = 2; l <= n; l++){
        
        for(let i=0; i < n - l + 1; i++){
            
            let j = i + l - 1;
            let len = 0;
            
            if( l == 2 ) {
                if( str[i] == str[j] ) {
                    res[i][j] = true;
                    len = 2;
                }
            }else{
                if(str[i] == str[j] && res[i+1][j-1]){
                    res[i][j] = true;
                    len = j -i + 1;
                }
            }
            if(len > max){
                max = len;
            }
        }
    }
    //we can print the longest palindrome sub string by looping through the res. Check i and j index if they are true return str.substr(i, j-i + 1)
    //console.log(res)
    return max;
}

//console.log(longestPalindromeSubStr("abba"));
console.log(longestPalindromeSubStr("abbababba"));
//console.log(longestPalindromeSubStr("babcbaabcbaccba"));
//console.log(longestPalindromeSubStr("cdbabcbabdab"));