//time O(n), space O(256)
let isUnique = ( str ) => {

    let len = str.length;

    // If length is greater than 265,
    // some characters must have been repeated
    if ( len > 256 ) {
        return false;
    }
    
    let arr = [...Array(256).fill(false)];

    for(let i= 0; i<len; i++) {
        if( arr[str[i].charCodeAt(0)] ) {
            return false;
        }
        arr[ str[i].charCodeAt(0) ] = true;

    }
    return true;
}

//time O(n), space O(1)
// The approach is valid for strings having alphabet as a-z
let isUnique2 = (str) => {

    let n = str.length;
    let checker = 0;

    for(let i=0; i<n; i++) {

        let val = str[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if ( checker & ( 1 << val ) ) {
            return false;
        }
        checker |= ( 1 << val );
    }
    return true;
}

let isUniqueStr = isUnique2('abcd');
console.log(isUniqueStr);
