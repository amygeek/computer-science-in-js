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


let arr = ['hell', 'hello', 'on', 'now', 'awesome'];
// arr.sort( (a, b)  => a.length - b.length ); // sort array by length ascending order
arr.sort( (a, b)  => b.length - a.length ); // sort array by length descending order

console.log(arr);