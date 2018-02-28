/**
 * Given a str, reverse the order of words.
 * Reverse the order of words in a given str. Here are a few examples: Hello World" -> "World Hello"
 * Runtime Complexity
    Linear, O(n).
    Position of all the elements in the str is changed.
 * Memory Complexity
    Constant, O(1).
 * The solution reverses every word in-place i.e. it does not require any extra space.
 */
let replaceAt = function(str, i, c){
    return str.substr(0, i) + c + str.substr(i + c.length);
};

let reverseStr = function(str, start, end) {
    if (!str || str.length < 2) {
        return;
    }
    while (start < end) {
        let temp = str[start];
        str = replaceAt(str, start, str[end]);
        str = replaceAt(str, end, temp);

        start++;
        end--;
    }
    return str;
};

let reverseWords = function(str) {

    let len = str.length;

    //  Here str is a null-terminated str ending with char '\0'.
    if (!str || len === 0) {
        return;
    }

    //   To reverse all words in the str, we will first reverse
    //   the str. Now all the words are in the desired location, but
    //   in reverse order: "Hello World" -> "dlroW olleH".

    
    str = reverseStr(str, 0, len - 1);

    //  Now, let's iterate the str and reverse each word in place.
    //  "dlroW olleH" -> "World Hello"

    let start = 0;
    let end = 0;
    while (true) {
        //  find the  start i of a word while skipping spaces.
        while (str[start] === ' ') {
            start++;
        }
        if (start >= len) {
            break;
        }

        //  find the end i of the word.
        end = start + 1;

        while (end < len && str[end] != ' ') {
            end++;
        }

        //  let's reverse the word in-place.
        str = reverseStr(str, start, end - 1);

        start = end;
    }
    return str;
};

let reverseWords2 = (words) => {
    words = words.split( ' ');
    let len = words.length;
    let mid = Math.floor(len / 2);

    for(let i=0; i<mid; i++) {
        let temp = words[i];
        words[i] = words[len-i-1];
        words[len-i-1] = temp;
    }
    return words.join(' ');
}


let str = "hello           world good      morning";
console.log(reverseWords( str ));
console.log(reverseWords2( str ));
