/**
 * Implement a stack using Queues.
 * Imagine we have a queue class that provides all common operations like enqueue, dequeue, size.
 * Using the instances of this queue class implement a stack class with its push, pop and isEmpty operations.
 * We'll apply push and pop operations on the stack and look at their corresponding enqueue and dequeue operations
 *
     Runtime Complexity
     push(): Constant, O(1).

     pop(): Linear, O(n).

     Memory Complexity
     Linear, O(n).
 */
class stack_using_queue {
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
        //push every items on queue1 to queue2 except the last item
        //using shift so that the newest item is on the top of queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        //get the last item in queue1
        let value = this.queue1.shift();

        this.swap_queues();

        return value;
    }
}

/**
 Runtime Complexity
 push(): Linear, O(n).

 pop(): Constant, O(1).

 Memory Complexity
 Linear, O(n).
 */
class stack_using_queue_2 {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    swap_queues() {
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }
    //last item that is pushed must be in front of queue1
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
    //first item in queue1 is the last time that is pushed
    pop() {
        if (this.isEmpty()) {
            throw "stack is empty";
        }
        return this.queue1.shift();
    }
}

let testStack = new stack_using_queue();

testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);

console.log(testStack);
console.log(testStack.pop());