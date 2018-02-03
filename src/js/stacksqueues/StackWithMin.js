class Stack {
    
    constructor() {
        this.stack = [];
    }
    
    push( v ) {
        this.stack.push( v );
    }
    
    pop() {
        return this.stack.pop();
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
    
    peek() {
        if ( !this.isEmpty() ) {
            return this.stack[this.stack.length - 1];
        }
    }
}

class StackWithMin extends Stack {
    constructor() {

        super();
        this.s2 = new Stack();
    }
    
    push( v ) {
        if ( v <= this.min() ) {
            this.s2.push( v );
        }
        super.push( v );
    }
    
    pop() {
        let v = super.pop();
        
        if ( v == this.min()) {
            this.s2.pop();
        }
        return v;
    }
    
    min() {
        if ( this.s2.isEmpty() ) {
            return Number.MAX_VALUE;
        } else {
            return this.s2.peek();
        }
    }
}

const randomIntInRange = (low, high) => {
    return parseInt( Math.random() * ( high - low + 1 ) + low )
}

let stack = new StackWithMin();
for (let i = 0; i < 15; i++) {
    let value = randomIntInRange(0, 100);
    stack.push(value);
    console.log(value + ", ");
}

for (let i = 0; i < 15; i++) {
    console.log("Popped " + stack.pop());
    console.log("New min is " + stack.min() );
}
