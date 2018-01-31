let isPermutation = (s, t) => {

    var sLength = s.length;
    var tLength = t.length;

    if (sLength !== tLength) {
        return false;
    }

    //256 includes standard ASCII characters(0-127) and Extended ASCII characters(128-255).
    let s_array = new Array(256).fill(0);


    for (var i = 0; i < sLength; i++) {
        s_array[s[i].charCodeAt(0)]++;
    }

    for (var i = 0; i < tLength; i++) {
        if (--s_array[t[i].charCodeAt(0)] < 0){
            return false;
        }
    }
    return true;
}

console.log(isPermutation('abc', 'cba'))