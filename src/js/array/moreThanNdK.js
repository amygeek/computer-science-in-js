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

