/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {

    var sArr = s.split("");
    var tArr = t.split("");
    var res = [];

    for (var i=0, l=t.length; i<l; i++) {
        if (tArr[i] == sArr[i] && res.indexOf(tArr[i]) === -1) {
            res.push(tArr[i]);
        }
    }

    return res.length;
};

numDistinct('rabbbit', 'rabbit');
