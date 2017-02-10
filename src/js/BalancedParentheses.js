class BalancedParentheses {
    
    constructor(str) {
        this.chkStr = str;
        this.stack = [];
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    stackEmpty() {
        return (this.stack.length === 0) ? true : false;
    }
    
    isMatched( opening, closing) {
        
        if (opening == '(' && closing == ')') {
            return true;
        } else if (opening == '{' && closing == '}') {
            return true;
        } else if(opening == '[' && closing == ']') {
            return true;
        } else {
            return false;
        }
        
    }
    
    areBalanced() {
        
        for(let i=0, l=this.chkStr.length; i<l; i++) {
            
            if ( this.chkStr[i] == '(' || this.chkStr[i] == '{' || this.chkStr[i] == '[') {
                this.stack.push(this.chkStr[i]);
            } else if ( this.chkStr[i] == ')' || this.chkStr[i] == '}' || this.chkStr[i] == ']') {
                
                if (this.stackEmpty() || !this.isMatched(this.top(), this.chkStr[i])) {
                    return false;
                } else {
                    this.stack.pop();
                }                
            }
        }
        return this.stackEmpty() ? true : false;
    }
    
}

export default BalancedParentheses;