let replaceSpaces = ( str ) => {

    let len = str.length;

    let spaceCount = 0;
    let arr = [];

    for ( let i=0; i<len; i++ ) {

        arr[i] = str[i];

        if ( str[i] === " ") {
            spaceCount++;
        }
    }

    let newLen = len + spaceCount * 2;

    for ( let i=len-1; i>=0; i-- ) {
        if (arr[i] === " ") {
            arr[--newLen] = '0';
            arr[--newLen] = '2';
            arr[--newLen] = '%';
        } else {
            arr[--newLen] = arr[i];
        }
    }
    return arr.join('');
}

let str = "abc d e f";

console.log( replaceSpaces( str));    //abc%20d%20e%20f