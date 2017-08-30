let reverseStr = (str) => {
    let len = str.length;
    if (len < 2) {
        return str
    } else {
        return  reverseStr(str.substring(1)) + str.charAt(0)
    }
}

let reverseStr2 = Array.prototype.map.call(str, function(x) {
    return x;
}).reverse().join('');

let reverseStr3 = str.split('').reverse().join('');