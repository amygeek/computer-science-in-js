let replaceSpaces = ( str ) => {

    let len = str.length;

    let spaceCount = 0;
    let arr = [];

    for ( let i=0; i<len; i++ ) {

        arr[i] = str.charAt(i);

        if ( str[i] === " ") {
            spaceCount++;
        }
    }

    let newLen = len + spaceCount * 2;

    for ( let i=len-1; i>=0; i-- ) {
        if (arr[i] === " ") {
            arr[newLen-1] = '0';
            arr[newLen-2] = '2';
            arr[newLen-3] = '%';
            newLen = newLen - 3;
        } else {
            arr[newLen-1] = arr[i];
            newLen = newLen - 1;
        }
    }
    return arr.join('');
}

let str = "abc d e f";

console.log( replaceSpaces( str));    //abc%20d%20e%20f