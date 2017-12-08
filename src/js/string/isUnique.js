let isUnique = ( str ) => {
    let arr = Array(256).fill(false);

    for(let i= 0, l=str.length; i<l; i++) {
        if( arr[str[i].charCodeAt(0)] ) {
            return false;
        }
        arr[ str[i].charCodeAt(0) ] = true;

    }
    return true;
}

(function(){
    let isUniqueStr = isUnique('abccd');
    console.log(isUniqueStr);
})();