/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s1, s2) {

    //var s1 = str1.split("");
    //var s2 = str2.split("");
    let set = new Set();

    for (var i=0, l=s2.length; i<l; i++) {
        if (s2[i] == s1[i] && !set.has(s2[i]) ) {
            set.add(s2[i]);
        }
    }

    return set.size;
};

console.log(numDistinct('rabbbit', 'rabbit'));  //3, rab
