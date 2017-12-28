let isPermutation = (s, t) => {

    var sLength = s.length;
    var tLength = t.length;

    if (sLength !== tLength) {
        return false;
    }

    //var s_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);
    let s_array = new Array(256);
    s_array.fill(0);


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