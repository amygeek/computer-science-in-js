

//O(n) time and O(1) space complexity.
/*
 Rearrange Positive and Negative Numbers of an Array so that one side you have positive numbers
 and other side with negative Integers without changing their respective order.

 Example : Input :  1 -2 3 -4 5 -6 7 -8 9 -10

 ReArranged Output :  -2 -4 -6 -8 -10 1 3 5 7 9

 This approach is similar to merge sort.
 Divide the array into two half, Solve them individually and merge them.
 Tricky part is in merging.
 Merging: (Negative on left side and positives on the right side)

 Navigate the left half of array till you won’t find a positive integer and reverse the array after that point.(Say that part is called ‘A’)
 Navigate the right half of array till you won’t find a positive integer and reverse the array before that point. (Say that part is called ‘B’)
 Now reverse the those parts from both the array (A and B)
 */
class RearrageArrayPositiveNegative {
    
    constructor ( arr ) {
        this.arr = arr;
    }
    
    sort( low,  high) {
    
        if (low >= high) {
            return;
        }
    
        let mid = Math.floor( (low + high) / 2 );
        this.sort(low, mid);
        this.sort(mid + 1 , high);
        this.merge(low, mid, high);
    
    }

    /*
     Merging: (Negative on left side and positives on the right side)

     Navigate the left half of array till you won’t find a positive integer and reverse the array after that point.(Say that part is called ‘A’)
     Navigate the right half of array till you won’t find a positive integer and reverse the array before that point. (Say that part is called ‘B’)
     Now reverse the those parts from both the array (A and B), See example for better explanation.
          A                        B
    -1  -2   1   3            -4  -5  7  8

    reverse(i, mid)           reverse(mid + 1, j - 1)
    -1  -2   3   1            -5  -4  7  8

            this.reverse(i, j - 1);
    -1  -2  -4  -5             1   3   7   8
     */
    merge( low, mid, high) {

        let i = low;
        let j = mid + 1;
    
        while (i <= mid && this.arr[i] < 0) {
            i++;
        }
    
        while (j <= high && this.arr[j] < 0) {
            j++;
        }

        this.reverse(i, mid);
        this.reverse(mid + 1, j - 1);
        this.reverse(i, j - 1);
    }

    swap(arr, x, y ) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    reverse( x,  y) {
        while (y > x) {
            this.swap(this.arr, x, y);
            x++;
            y--;
        }
    }
}

let a = [ 1, -2, -3, -4, 5, -6, 7, -8, 9, -10, -11, -12, 20 ];
let r = new RearrageArrayPositiveNegative( a );
r.sort(0, a.length - 1);

console.log(a);
