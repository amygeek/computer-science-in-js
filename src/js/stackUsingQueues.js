/**
 * Implement a stack using Queues.
 * Imagine we have a queue class that provides all common operations like enqueue, dequeue, size.
 * Using the instances of this queue class implement a stack class with its push, pop and isEmpty operations.
 *
 * Runtime Complexity
    push(): Constant, O(1).

    pop(): Linear, O(n).

 * Memory Complexity
    Linear, O(n).
 */
class stackUsingQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(data) {
        this.queue1.push(data);
    }

    isEmpty() {
        return ((this.queue1.length + this.queue2.length) === 0);
    }


    swap_queues() {
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        if (this.isEmpty()) {
            throw "stack is empty";
        }

        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        let value = this.queue1.shift();

        this.swap_queues();

        return value;
    }
}

/**
 * Runtime Complexity
    push(): Linear, O(n).

    pop(): Constant, O(1).

 * Memory Complexity
    Linear, O(n).
 */
class stackUsingQueueV2 {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    swap_queues() {
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    push(data) {
        if (this.queue1.length === 0) {
            this.queue1.push(data);
        } else {
            this.queue2.push(data);
            while (this.queue1.length !== 0) {
                this.queue2.push(this.queue1.shift());
            }
            this.swap_queues();
        }
    }
    isEmpty() {
        return this.queue1.length + this.queue2.length === 0;
    }
    pop() {
        if (this.isEmpty()) {
            throw "stack is empty";
        }
        return this.queue1.shift();
    }
}