let isPermutation = (s, t) => {

    const sLen = s.length;
    const tLen = t.length;

    if (sLen !== tLen) {
        return false;
    }

    //256 includes standard ASCII characters(0-127) and Extended ASCII characters(128-255).
    const arr = [...Array(256).fill(0)];


    for (var i = 0; i < sLen; i++) {
        arr[ s[i].charCodeAt(0) ]++;
    }

    for (var i = 0; i < tLen; i++) {
        if (--arr[ t[i].charCodeAt(0) ] < 0){
            return false;
        }
    }
    return true;
}

console.log(isPermutation('abc', 'dca'));  // false
console.log(isPermutation('amy', 'yam'));  // true