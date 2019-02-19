/**
    Find next greater number with same set of digits
    Given a number n, find the smallest number that has same set of digits as n and is greater than n.
    If x is the greatest possible number with its set of digits, then print “not possible”.
    
    Input:  n = "218765"
    Output: "251678"

    Input:  n = "1234"
    Output: "1243"

    Input: n = "4321"
    Output: "Not Possible"

    Input: n = "534976"
    Output: "536479"
 */
class NextGreater {

    swap( arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    reverse( arr, start, end ) {
        while ( start <= end ) {
            this.swap(arr, start, end );
            start++;
            end--;
        }
    }

    findNext( arr ) {

        let n = arr.length;

        //find the first number that is not in decreasing order from the end
        let i = n - 2;
        while(i >= 0 && arr[i] > arr[i+1] ) {
            i--;
        }

        //find the second number that is larger than the first number from the end
        if ( i >= 0 ) {
            let j = n - 1;
            while ( j >= 0 && arr[j] < arr[i] ) {
                j--;
            }

            //if both numbers found, swap them
            this.swap(arr, i, j);

             //reverse the arr from index 1 + 1 to end of array
            this.reverse(arr, i + 1, n-1);
            console.log('Find next greater number with same set of digits: ', arr.toString());
        } else {
            console.log('not possible');
        }
       
    }
}

//test
const nextGreater = new NextGreater();
const arr = [1,5,8,4,7,6,5,3,1]; //[1, 5, 8, 5, 1, 3, 4, 6, 7]
// let arr = [4,3,2,1];
nextGreater.findNext( arr );
