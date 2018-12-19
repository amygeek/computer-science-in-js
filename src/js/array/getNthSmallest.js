//get smallest one million number from a billion number

class Ranks {

    getRandomIntInArray ( low, high ) {
        return parseInt( Math.random() * (high - low + 1) + low);
    }

    //use it to find Kth smallest element
    max( arr, start, end ) {
        let max = Number.MIN_VALUE;
        for (let i=start; i<=end; i++) {
            max = Math.max( max, arr[i])
        }
        return max;
    }

    //use it to find Kth largest element
    min( arr, start, end ) {
        let min = Number.MAX_VALUE;
        for (let i=start; i<=end; i++) {
            min = Math.min( min, arr[i])
        }
        return min;
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    //partition: smallest element in the front, use it to find Kth smallest element
    partition( arr, left, right) {

        let index = this.getRandomIntInArray(left, right);
        let pivot = arr[index];

        while (left <= right) {
            while ( arr[left] <= pivot) {
                left++;
            }

            while (arr[right] > pivot) {
                right--;
            }

            if (left > right) {
                return left - 1;
            }
            this.swap(arr, left, right);
        }
    }

    getNthSmallest( arr, left, right, k) {
        
        let pos = this.partition(arr, left, right); // returns end of left partition

        let leftSide = pos - left;

        if (leftSide === k - 1 ) {
            //return arr.slice(0, leftEnd);
            return this.max(arr, left, pos);
            //return this.min(arr, left, leftEnd);
        } else if (leftSide > k - 1) {
            return this.getNthSmallest(arr, left, pos, k);
        } else {
            return this.getNthSmallest(arr, pos + 1, right, k - leftSide - 1)
        }
    }

    swap(arr, i, j) {
        // return [arr[i], arr[j]] = [arr[j], arr[i]];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    partition2(arr, left, right) {
        let x = arr[right];
        let i = left;
        for(let j=left; j<right; j++) {
            if(arr[j] <= x) {
                this.swap(arr, i, j);
                i++
            }
        }
        this.swap(arr, i, right);
        return i;
    }

    getNthSmallest2(arr, left, right, k) {
        if ( k > 0 && k <= right - left + 1) {
            // Partition the array around last  
            // element and get position of pivot  
            // element in sorted array 
            let pos = this.partition2(arr, left, right); 
  
            let leftSide = pos - left;
            // If position is same as k 
            if (leftSide == k - 1) {
                return arr[pos]; 
            }
               
            // If position is more, recur for left subarray 
            if (leftSide > k-1) {
                return this.getNthSmallest2(arr, left, pos-1, k); 
            }
                
            // Else recur for right subarray 
            return this.getNthSmallest2(arr, pos+1, right, k - leftSide - 1); 
           
        }
  
        return null
    }

    toString(arr) {
        let str = '';
        for (let i=0, l=arr.length; i<l; i++) {
            str += arr[i] + ' ';
        }
        return str;
    }

}
// 1 8 16 30 10 90 7 50 4 
//testing
let arr = [2, 4, 50, 7, 90, 10, 1, 30, 16, 8];

let ranks = new Ranks();

console.log(ranks.getNthSmallest(arr, 0, arr.length-1, 4));  //third smallest number is 7 with index starts at 0, it will be number 4 smallest element
// console.log(arr.sort((a,b) => (a-b))); //sorted array [ 1, 2, 4, 7, 8, 10, 16, 30, 50, 90 ]

// let smallest = ranks.getNthSmallest2(arr, 0, arr.length-1, 4);
// console.log('smallest: ', smallest);