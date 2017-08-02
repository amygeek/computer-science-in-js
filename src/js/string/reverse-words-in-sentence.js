/**
 * Given a sentence, reverse the order of words.
 * Reverse the order of words in a given sentence. Here are a few examples: Hello World" -> "World Hello"
 * Runtime Complexity
    Linear, O(n).
    Position of all the elements in the sentence is changed.
 * Memory Complexity
    Constant, O(1).
 * The solution reverses every word in-place i.e. it does not require any extra space.
 */
let replaceAt = function(string, index, character){
    return string.substr(0, index) + character + string.substr(index + character.length);
};

let strRev = function(str, start, end) {
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

let reverseWords = function(sentence) {

    //  Here sentence is a null-terminated string ending with char '\0'.
    if (!sentence || sentence.length === 0) {
        return;
    }

    //   To reverse all words in the string, we will first reverse
    //   the string. Now all the words are in the desired location, but
    //   in reverse order: "Hello World" -> "dlroW olleH".

    let str_len = sentence.length;
    sentence = strRev(sentence, 0, str_len - 1);

    //  Now, let's iterate the sentence and reverse each word in place.
    //  "dlroW olleH" -> "World Hello"

    let start = 0;
    let end = 0;
    while (true) {
        //  find the  start index of a word while skipping spaces.
        while (sentence[start] === ' ') {
            start++;
        }
        if (start >= sentence.length) {
            break;
        }

        //  find the end index of the word.
        end = start + 1;
        while (end < sentence.length && sentence[end] != ' ') {
            end++;
        }

        //  let's reverse the word in-place.
        sentence = strRev(sentence, start, end - 1);

        start = end;
    }
    return sentence;
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

(function(){
    let sentense = "hello           world good      morning";
    console.log(reverseWords( sentense ));
    console.log(reverseWords2( sentense ));
})();
