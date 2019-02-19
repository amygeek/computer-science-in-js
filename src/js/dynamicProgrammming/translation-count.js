/*
 Given a number, please translate it to a string, following the rules:
 1 is translated to 'a', 2 to 'b', …, 12 to 'l', …, 26 to 'z'.
 For example, the number 12258 can be translated to "abbeh", "aveh", "abyh", "lbeh" and "lyh",
 so there are 5 different ways to translate 12258. How to write a function/method
 to count the different ways to translate a number?
 */
let getTranslationCount = (number) => {

    let num = number.toString();
    let n = num.length;

    let res = [];

    for (let i = n - 1; i >= 0; i--) {

        let count = 0;
        
        //start from the end of the string.
        if (i === n - 1) {
            // count one from last digit at the end of the string
            count = 1;
        } else {
            // if i < n - 1, first we need the add the previou count
            count += res[i + 1];
            let digit = parseInt(num.substr(i, 2));
            
            if (digit >= 10 && digit <= 26) {
                if (i < n - 2) {
                    count += res[i + 2];
                } else {
                    count++;
                }
            }
        }

        res[i] = count;
    }

    return res[0];
}

//test
console.log('getTranslationCount 12258: ', getTranslationCount(12258)); // 5
console.log('getTranslationCount 126: ', getTranslationCount(126)); // 3
console.log('getTranslationCount 56789: ', getTranslationCount(56789)); // 1

let helper = (data, k, memo) => {
    if (k === 0) {
        return 1;
    }
    let i = data.length - k;
    if (data[i] === '0') {
        return 0;
    }
    if (memo[k]) {
        return memo[k];
    }
    let result = helper(data, k - 1, memo);
    let s = data.substr(i, 2) - '0';  // convert string to number
    if (k >= 2 && s <= 26) {
        result += helper(data, k - 2, memo);
    }
    memo[k] = result;
    return result;
}
let numWays = (data) => {
    data = data + '';   // convert number to string
    let k = data.length;
    let memo = [...Array(k+1)];
    return helper(data, k, memo);
}

console.log('numWays 12258: ', numWays(12258)); // 5
console.log('numWays 126: ', numWays(126)); // 3
console.log('numWays 56789: ', numWays(56789)); // 1