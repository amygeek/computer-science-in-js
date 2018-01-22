
/*
 For Given Number N find if its COLORFUL number or not

 Return true or false

 COLORFUL number:

 A number can be broken into different subsequence parts.
 Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245.
 And this number is a COLORFUL number, since product of every digit of a subsequence are different

 Example:

 N = 23
 2 3 23
 2 -> 2
 3 -> 3
 23 -> 6
 this number is a COLORFUL number since product of every digit of a
 sub-sequence are different.
 */


 let  isColorFull = ( a ) => {

    let s = a + "";
    let n = s.length;
    let set = new Set();

    let temp = 0;

    while (temp < n) {
        //if consecutive Integer is same return 0
        if (set.has(s[temp] - '0')) {
                return false;
        }
        set.add(s[temp] - '0');
        temp++;
    }
    
    let i = 0;
    let j = 1;
    let val1 = 0;
    let val2 = 0;
    
    while (j < n) {
    
        val1 = s[i] - '0';
        val2 = s[j] - '0';
    
        if (set.has(val1 * val2)) {
            return false;
        }
            
    
        set.add( val1 * val2 );
    
        i++;
        j++;
    }
    return true;
}
    
console.log(isColorFull(234));    // true
console.log(isColorFull(2347));   // true
console.log(isColorFull(123));    // false
console.log(isColorFull(62345));  // false
console.log(isColorFull(23));     // true
console.log(isColorFull(3245));   // true
console.log(isColorFull(326));    // false
