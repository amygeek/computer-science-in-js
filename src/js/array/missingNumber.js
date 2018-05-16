/** All elements appears three times and one element appears once. Find that element in O(n) time…

 O(n) time and O(1) space:

 1) Sum all the bits in same positions for all the elements and take modulus with 3.
 2) If remainder is 0 i.e if sum is multiple of 3 means that bit is set by elements appear­ing thrice.
 3) If remainder is not 0 i.e sum is not multiple of 3, it means that bit is set in element appears once for sure.
 (not sure if that bit is set or unset in elements appearing thrice.)
 4) So if we repeat step 1,2,3 for all the elements for all the positions then we will get the element appearing once. See the exam­ple below

 Say arr[] = {6, 6, 6, 3}

 1 1 0
 1 1 0
 1 1 0
 0 1 1
 __________+
 3 4 1

 Now modulus with 3

 3mod3  4mod3 1mod3 => 0 1 1 => 3 element appearing once.
 */
let missingNumber = ( arr ) => {

    let n = arr.length;

    let singleNumber = 0;

    for (let i=0; i<32; i++) {  //this is for calculating for every position in 32 bit integer

        let y = 1 << i;
        let count = 0;
        for (let j=0; j<n; j++) {
            if( ( arr[j] & y ) >= 1 ) { //if that particular bit is set for the ith position, add 1 to count
                count++;
            }
        }
        //if bits are not multiple of 3 then that bit belongs to the element appearing single time
        if ( (count % 3) === 1 ) {
            singleNumber = singleNumber | y;
        }
    }
    console.log("single number: ", singleNumber);
}

let arr = [1, 4, 5, 6, 1, 4, 6, 1, 4, 6];

missingNumber( arr );