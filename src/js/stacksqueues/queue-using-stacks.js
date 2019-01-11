/**
 * Implement a queue using Stacks.
 * Imagine we have a stack class that provides all common operations like push, pop, isEmpty. 
 * Using the instances of this stack class, implement a queue class with its enqueue, dequeue and isEmpty operations.

     Solution #1: make the 'add' operation faster
     Runtime Complexity
     add(): Constant, O(1).

     remove(): Linear, O(n).

     Memory Complexity
     Linear, O(n).
 */
class queue_using_stack {
    constructor() {
        this.oldStack = [];
        this.newStack = [];
    }

    size() {
        return this.newStack.length + this.oldStack.length;
    }
    enqueue(data) {
        this.newStack.push(data);
    }
    empty() {
        return (this.newStack.length === 0 && this.oldStack.length === 0);
    }

    shiftStack() {
        if (this.oldStack.length === 0) {
            while (this.newStack.length !== 0) {
                this.oldStack.push(this.newStack.pop());
            }
        }
    }
    dequeue() {
        if (this.empty()) {
            throw('Stack is empty.');
        }
        this.shiftStack();
        return this.oldStack.pop();
    }

    peek() {
        this.shiftStack();
        return this.oldStack[this.oldStack.length - 1];
    }
}

/**
 Solution #2
 Runtime Complexity
 add(): Linear, O(n).

 remove(): Constant, O(1).

 Memory Complexity
 Linear, O(n).
 */
class queue_using_stack_2 {
    constructor() {
        this.oldStack = [];
        this.newStack = [];
    }
    //newest item is on the bottom of oldStack, and the oldest item are on top of oldStack
    enqueue(data) {
        while(this.oldStack.length > 0) {
          this.newStack.push(this.oldStack.pop());
        }
        this.oldStack.push(data);
        while(this.newStack.length > 0) {
          this.oldStack.push(this.newStack.pop());
        }
    }
    empty() {
        return this.oldStack.length === 0 && this.newStack.length === 0;
    }
    
    dequeue() {
        if (this.empty()) {
            Throw('stack is empty');
        }
        return this.oldStack.pop();
    }
}

let testQueue = new queue_using_stack();

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);

console.log(testQueue);
console.log(testQueue.size());
console.log(testQueue.dequeue());