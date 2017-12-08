/**
 * Implement a queue using Stacks.
 * Imagine we have a stack class that provides all common operations like push, pop, isEmpty.
 * Using the instances of this stack class, implement a queue class with its enqueue, dequeue and isEmpty operations.

     Solution #1: make the 'enqueue' operation faster
     Runtime Complexity
     enqueue(): Constant, O(1).

     dequeue(): Linear, O(n).

     Memory Complexity
     Linear, O(n).
 */
class queue_using_stack {
    constructor() {
        this.newestStack = [];
        this.oldestStack = [];
    }

    enqueue(data) {
        this.newestStack.push(data);
    }
    empty() {
        return (this.newestStack.length === 0 && this.oldestStack.length === 0);
    }
    dequeue() {
        if (this.empty()) {
            throw "stack is empty";
        }

        if (this.oldestStack.length === 0) {
            while (this.newestStack.length !== 0) {
                this.oldestStack.push(this.newestStack.pop());
            }
        }

        return this.oldestStack.pop();
    }
}

/**
 Solution #2
 Runtime Complexity
 enqueue(): Linear, O(n).

 dequeue(): Constant, O(1).

 Memory Complexity
 Linear, O(n).
 */
class queue_using_stack_2 {
    constructor() {
        this.newestStack = [];
        this.oldestStack = [];
    }
    //newest item is on the bottom of oldestStack, and the oldest item are on top of oldestStack
    enqueue(data) {

        while (this.oldestStack.length !== 0) {
            this.newestStack.push(this.oldestStack.pop());
        }
        this.oldestStack.push(data);

        while (this.newestStack.length !== 0) {
            this.oldestStack.push(this.newestStack.pop());
        }
    }
    empty() {
        return (this.newestStack.length === 0 && this.oldestStack.length === 0);
    }
    dequeue() {
        if (this.empty()) {
            throw "stack is empty";
        }
        return this.oldestStack.pop();
    }
}

let testQueue = new queue_using_stack_2();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);

console.log(testQueue);
console.log(testQueue.dequeue());