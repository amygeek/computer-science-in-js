
/*
 Write an algorithm to Print All the Well Ordered Permutations of a Given String.

 What is Well Ordered String: When all the alphabets in a string occur in the increasing order irrespective of Lower Case or Upper case.

 This is yet another problem in which you we see the power of recursion.

 Example :

 "Sumit" - Not Well Ordered . 'u' occurred after 'S'.

 "Now" - Well Ordered. N<o<W.

 */

class WellOrderedPermutations {

    // Logic:
    // 1. Get the input sequence
    // 2. Find out all the permutations of a String
    // 3. Before printing if the permutation is well formed.

    constructor( s ) {
        this.str = s.split( "" );
        this.permutation( this.str, 0);
    }

    permutation(str, left) {
        if (left == str.length) {
            if (this.isWellFormed(str)) {
                console.log( "wellFormed string: " + str.join("") );
            }
            //console.log( "wellFormed string: " + str );
            return;
        }
        for (let i = left; i < str.length; i++) {
            this.swap(str, i, left);
            this.permutation(str, left + 1);
            this.swap(str, i, left); // backtrack
        }
    }
    
    swap( str, a,  b) {
        let temp = str[a];
        str[a] = str[b];
        str[b] = temp;
    }
    
    isWellFormed( str ) {

        let wellFormed = true;

        for (let i = 0; i < str.length - 1; i++) {
            if (str[i].toLowerCase() > str[i + 1].toLowerCase()) {
                //System.out.println(str);
                wellFormed = false;
                break;
            }
        }
        return wellFormed;
    }

}

let s = "Now";  // [N, o, w] [N, w, o][o, N, w] [o, w, N] [w, o, N] [w, N, o]: [N, o, w] is wellformed
console.log("Given String - " + s);

new WellOrderedPermutations( s );
