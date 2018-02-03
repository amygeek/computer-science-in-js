
class ThreeStacks {

    constructor() {

        this.stackSize = 10;
        this.buffer = new Array( this.stackSize * 3 );

        // 3 stack pointers to keep track of the index of the top element
        this.stackPointer = [-1, -1, -1];
    }

    push( stackNum,  value ) {
        /* Check that we have space for the next element */
        if (this.stackPointer[stackNum] + 1 >= this.stackSize) {
            console.log( " Full Stack Exception");
            return;
        }
        /* Increment stack pointer and then update top value*/
        this.stackPointer[stackNum]++;
        this.buffer[this.absTopOfStack(stackNum)] = value;
    }

    pop( stackNum) {
        if (this.isEmpty(stackNum)) {
            console.log( "Empty stack exception");
            return;
        }
        let value = this.buffer[this.absTopOfStack(stackNum)]; // Get top
        this.buffer[this.absTopOfStack(stackNum)] = 0; // Clear index
        this.stackPointer[stackNum]--; // Decrement pointer
        return value;
    }

    peek( stackNum ) {
        if (this.isEmpty(stackNum)) {
            console.log( "Empty stack exception");
            return;
        }
        return this.buffer[this.absTopOfStack(stackNum)];
    }

    isEmpty( stackNum ) {
        return this.stackPointer[stackNum] == -1;
    }

    /* returns index of the top of the stack "stackNum", in absolute terms */
    absTopOfStack( stackNum ) {
        return stackNum * this.stackSize + this.stackPointer[stackNum];
    }

    test() {
        this.push(2, 4);
        console.log("Peek 2: " + this.peek(2));
        this.push(0, 3);
        this.push(0, 7);
        this.push(0, 5);
        console.log("Peek 0: " + this.peek(0));
        this.pop(0);
        console.log("Peek 0: " + this.peek(0));
        this.pop(0);
        console.log("Peek 0: " + this.peek(0));
    }
}

let stacks = new ThreeStacks();

stacks.test();