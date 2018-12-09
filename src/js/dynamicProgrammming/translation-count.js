/*
 Given a number, please translate it to a string, following the rules:
 1 is translated to 'a', 2 to 'b', …, 12 to 'l', …, 26 to 'z'.
 For example, the number 12258 can be translated to "abbeh", "aveh", "abyh", "lbeh" and "lyh",
 so there are 5 different ways to translate 12258. How to write a function/method
 to count the different ways to translate a number?
 */
let getTranslationCount = (number) => {

    let num = number.toString();
    let len = num.length;

    let counts = [];

    for (let i = len - 1; i >= 0; --i) {

        let count = 0;

        if (num[i] >= '1' && num[i] <= '9') {
            if (i < len - 1) {
                count += counts[i + 1];
            } else {
                count = 1;
            }
        }

        if (i < len - 1) {

            // convert string num[i] to number by minus '0'
            let digit1 = num[i] - '0';
            let digit2 = num[i + 1] - '0';
            let converted = digit1 * 10 + digit2;
            if (converted >= 10 && converted <= 26) {
                if (i < len - 2) {
                    count += counts[i + 2];
                } else {
                    count += 1;
                }
            }
        }

        counts[i] = count;
    }

    return counts[0];
}

//test
let cnt = getTranslationCount(12258);
console.log(cnt); //5
cnt = getTranslationCount(126);
console.log(cnt); //3

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

console.log('numWays 12258: ', numWays(12258)); //5
console.log('numWays 126: ', numWays(126)); //3