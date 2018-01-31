

class Convert {
    
    constructor() {
        this.digits = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        this.teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        this.tens = ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        this.bigs = ["", "Thousand", "Million", "Billion"];
    }
    
    randomInt(low, high) {
        return parseInt( Math.random() * ( high - low + 1) + low);
    }
    numToString( number ) {
        if (number == 0) {
            return "Zero";
        }
        
        if (number < 0) {
            return "Negative " + this.numToString(-1 * number);
        }
        let count = 0;
        let str = "";
        
        while (number > 0) {
            if (number % 1000 != 0) {
                str = this.numToString100(number % 1000) + this.bigs[count] + " " + str;
            }
            number = parseInt( number / 1000 );
            count++;
        }
        
        return str;
    }
    
    numToString100( number ) {

        let str = "";
    
        /* Convert hundreds place */
        if (number >= 100) {
            let num = parseInt(number / 100 );
            str += this.digits[num - 1] + " Hundred ";
            number %= 100;
        }
    
        /* Convert this.tens place */
        if (number >= 11 && number <= 19) {
            return str + this.teens[number - 11] + " ";
        } else if (number == 10 || number >= 20) {

            let num = parseInt(number / 10 );
            str += this.tens[num - 1] + " ";
            number %= 10;
        }
    
        /* Convert ones place */
        if (number >= 1 && number <= 9) {
            str += this.digits[number - 1] + " ";
        }
    
        return str;
    }
    
    test() {
    
        /* numbers between 0 and 100 */
        for (let i = 0; i < 10; i++) {
            let value = this.randomInt(0, 100);
            let s = this.numToString(value);
            console.log(value + ": " + s);
        }
    
        /* numbers between 100 and 1000 */
        for (let i = 0; i < 10; i++) {
            let value = this.randomInt(100, 1000);
            let s = this.numToString(value);
            console.log(value + ": " + s);
        }

        /* numbers between 1000 and 100000 */
        for (let i = 0; i < 10; i++) {
            let value = this.randomInt(1000, 100000);
            let s = this.numToString(value);
            console.log(value + ": " + s);
        }


        /* numbers between 100000 and 100000000 */
        for (let i = 0; i < 10; i++) {
            let value = this.randomInt(100000, 100000000);
            let s = this.numToString(value);
            console.log(value + ": " + s);
        }

        /* numbers between 100000000 and 1000000000 */
        for (let i = 0; i < 10; i++) {
            let value = this.randomInt(100000000, 1000000000);
            let s = this.numToString(value);
            console.log(value + ": " + s);
        }
    
        /* numbers between 1000000000 and Integer.MAX_VALUE */
        for (let i = 0; i < 10; i++) {
            let value = this.randomInt(1000000000, Number.MAX_VALUE);
            let s = this.numToString(value);
            console.log(value + ": " + s);
        }
    }
}

let c = new Convert();
c.test();
