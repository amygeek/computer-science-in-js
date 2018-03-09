/*
 Find All Elements in an Array which appears more than N/K times, N is Array Size and k is a Number.
 int[] arrA = { 2, 2, 4, 4, 3, 5, 3, 4, 4, 6, 4, 3, 3, 8 };

 K = 4

 N/k = 14/4 = 3

 Output will be [3,4] they appear 5, 4 times respectively.
 Naive Approach: Take two for loops , check every element with all other elements, Time Complexity -   O(n2) time.

 Better Approach: Tetris Game technique– O(Nk)
 Create array element[] contains k-1 objects of class Elements with element =0 and count = 0.
 So idea is, navigate all the elements of given array.
 Check if element exist in element[] if not, insert it with the count 1 and if exist then increase its count.
 Also check if element[] gets full when inserting an element, if it is not, follow the previous step. If it is full then reduce the count of every existing element in the element[]. (Just think of a Tetris game, when row gets full, it gets deleted and size of the Tetris reduced by 1) see the picture below.
 Once all the elements of array gets over, check every element of element[] with array and print those elements which has N/K times.
 */
class Element {
    constructor(e, c) {
        this.element = e;
        this.count = c;
    }
}

class NbyKElement {
    constructor(arr, n, k) {
        this.arr = arr;
        this.size = n;
        this.elm = this.initElements(k);
        this.elmSize = k;
    }

    initElements( k ) {
        let temp = [];
        for (let i=0; i<k; i++) {
            temp[i] = new Element(0, 0);
        }
        return temp;
    }

    found( elm ) {
        for (let i=0; i<this.elmSize; i++) {
            if ( this.elm[i].element === elm ) {
                return i;
            }
        }
        return -1;
    }

    copyToArray( elm ) {
        for (let i=0; i<this.elmSize; i++) {
            if (this.elm[i].count === 0 ) {
                this.elm[i].element = elm;
                this.elm[i].count = 1;
                return;
            }
        }
        //if it reaches here, that means this.elm is full. We will decrease the count in every element
        for (let i=0; i<this.elmSize; i++) {
            this.elm[i].count--;
        }
    }

    findElement() {
        let res = [];
        for(let i=0; i<this.size; i++) {

            let index = this.found( arr[i]);
            if ( index !== -1 ) {
                this.elm[index].count++;
            } else {
                this.copyToArray( arr[i]);
            }

        }

        for (let i=0; i<this.elmSize; i++) {
            let count = 0;
            for (let j=0; j<this.size; j++) {
                if (this.elm[i].element == this.arr[j]) {
                    count++;
                }
            }
            if ( count > this.size / this.elmSize ) {
                //console.log(`Found elment of ${this.elm[i].element} for total count of ${count}`);
                res.push({element: this.elm[i].element, count: count});
            }
        }
        return res;
    }
}


let arr = [2, 2, 4, 4, 3, 5, 3, 4, 4, 6, 4, 3, 3, 8];
let nbyKElement = new NbyKElement( arr, arr.length, 4)
let res = nbyKElement.findElement();

console.log(res)

