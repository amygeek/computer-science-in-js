class CircularQueue {

    constructor(size) {
        this.len = size;
        this.top = -1;
        this.end = -1;
        this.arr = new Array(size);
    }

    offer(d) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        } else if(this.top === -1) {
            this.top = this.end = 0;
            this.arr[0] = d;
        } else {
            this.end = (this.end + 1) % this.len;
            this.arr[this.end] = d;
        }
    }

    poll() {
        if ( this.isEmpty() ) {
            console.log("Queue is empty");
            return null;
        } else if(this.top === this.end) {
            let v = this.arr[this.top];
            this.top = -1;
            this.end = -1;
            return v;
        } else {
            let v = this.arr[this.top];
            this.top = (this.top + 1) % this.len;
            return v;
        }

    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === (this.end + 1 ) % this.len;
    }
}

let q = new CircularQueue(5);

q.offer(1);
q.offer(2);
q.offer(3);
q.offer(4);
q.offer(5);


console.log(q.isFull());

q.poll()
q.poll()
q.poll()
q.poll()
q.poll()
console.log(q.end);
console.log(q.top);
console.log(q.isEmpty());