class StackStore {
    
    constructor() {
        this.top = 0; 
        this.dataStore = [];
    }
    
    push(x) {
        this.dataStore[this.top++] = x;
    }
    
    pop() {
        return this.dataStore[--this.top]
    }
    
    peek() {
        return this.dataStore[this.top - 1];
    }
    
    clear() {
       this.top = 0; 
    }
    
    length() { 
        return this.top;
    }
    
    isEmpty() {
        return (this.top === 0) ? true : false;
    }
}

export default StackStore;