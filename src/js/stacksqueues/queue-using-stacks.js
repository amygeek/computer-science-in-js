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
    //newest item is on the bottom of newestStack, and the oldest item are on top of newestStack
    enqueue(data) {

        while (this.newestStack.length !== 0) {
            this.oldestStack.push(this.newestStack.pop());
        }
        this.newestStack.push(data);

        while (this.oldestStack.length !== 0) {
            this.newestStack.push(this.oldestStack.pop());
        }
    }
    empty() {
        return (this.newestStack.length === 0 && this.oldestStack.length === 0);
    }
    dequeue() {
        if (this.empty()) {
            throw "stack is empty";
        }
        return this.newestStack.pop();
    }
}