let str = "test";

let reverseStr = (str) => {
    let len = str.length;
    if (len < 2) {
        return str
    } else {
        return  reverseStr(str.substring(1)) + str.charAt(0)
    }
}

let reverseStr2 = Array.prototype.map.call(this, function(x) {
    return x;
}).reverse().join('');

let reverseStr3 = str.split('').reverse().join('');

let sortStringByLen = (arr) => {
    arr.sort( (a, b)  => {
        return a.length > b.length ? -1 : a.length < b.length ? 1 : 0;
    })
}

let arr = ['hell', 'hello', 'on', 'now', 'awesome'];
sortStringByLen(arr);
console.log(arr);