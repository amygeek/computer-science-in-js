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
(function(){
    let cnt = getTranslationCount(12258);
    console.log(cnt); //5
    cnt = getTranslationCount(126);
    console.log(cnt); //3
})()
