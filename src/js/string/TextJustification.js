/*
 Given a list of words and length maxLen. Format the words so that each line will have only maxLen characters and fully justified
 (left and right justified).

 Restrictions-

 You need to fit as many as words in every line.
 You are not allowed to split a word and put them in next line.
 Pad extra spaces ‘ ‘ if needed so that each line has maxLen characters.
 Extra spaces between words should be distributed as evenly as possible. If even distribution is not possible then extra
 spaces will be assigned on the left most space (between two words).
 Assumption – Each word has length less than Length maxLen.

 Example:

 String [] words = {"This", "is", "a", "text", "justification","problem","in","tutorial","horizon"};
 int length = 20;

 Output:
 This   is   a   text
 justification
 problem  in tutorial
 horizon
 */

let getSpace = ( spaceCount ) => {
    let str = '';
    while ( spaceCount > 0) {
        str += ' ';
        spaceCount--;
    }
    return str;
}

let fullJustify = (s, maxLen) => {
    
    let n = s.length;

    for(let i = 0, k=0; i < n; i += k) {

        let curLen = 0;

        for(k = 0; i + k < n && curLen + s[i+k].length <= maxLen - k; k++) {
            curLen += words[i+k].length;
        }

        let tmp = s[i];

        for(let j = 0; j < k - 1; j++) {

            if(i + k >= n) {
                tmp += ' ';
            } else {
                let space = parseInt( (maxLen - curLen) / (k - 1) ) ;

                tmp += getSpace(space);

                //If even distribution is not possible, extra space will be assigned on the left most space (between two words).
                if ( j < (maxLen - curLen) % (k - 1) ) {
                    tmp += ' ';
                }
            }
            tmp += s[i + j + 1];
        }
        
        let spaceOnTheRight = maxLen - tmp.length;

        tmp += getSpace( spaceOnTheRight );

        console.log( tmp )
    }
}

let arr = ["This", "is", "a", "text", "justification","problem","in","tutorial","horizon"];
fullJustify(arr, 20);