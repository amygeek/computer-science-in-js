let isSubstring = (s1, s2 ) => {

    //if ( s1.indexOf( s2 )  !== -1 ) {
    if ( s1.includes(s2) ) {  // includes only works for IE12 and above. for IE11 and below, use indexOf
        return true;
    }
    return false;
}

let isRotation = ( s1, s2 ) => {

    let len = s1.length;
    if ( len === s2.length && len > 0 ) {
        let s1s1 = s1 + s1;
        return isSubstring( s1s1, s2);
    }
    return false;
}

let s1 = "waterbottle";
let s2 = "erbottlewat";

console.log( isRotation(s1, s2) );