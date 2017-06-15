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
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(data) {
        this.stack1.push(data);
    }
    empty() {
        return (this.stack1.length === 0 && this.stack2.length === 0);
    }
    dequeue() {
        if (this.empty()) {
            throw "stack is empty";
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
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
        this.stack1 = [];
        this.stack2 = [];
    }
    //newest item is on the bottom of stack1, and the oldest item are on top of stack1
    enqueue(data) {

        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(data);

        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }
    }
    empty() {
        return (this.stack1.length === 0 && this.stack2.length === 0);
    }
    dequeue() {
        if (this.empty()) {
            throw "stack is empty";
        }
        return this.stack1.pop();
    }
}