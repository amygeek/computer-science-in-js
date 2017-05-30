/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(str1, str2) {

    var s1 = str1.split("");
    var s2 = str2.split("");
    var res = [];

    for (var i=0, l=s2.length; i<l; i++) {
        if (s2[i] == s1[i] && res.indexOf(s2[i]) === -1) {
            res.push(s2[i]);
        }
    }

    return res.length;
};

console.log(numDistinct('rabbbit', 'rabbit'));  //3, rab
