

class DecimalOctalPalindrome {

    decimalToOctal( num ) {
        let oct = "";
        while (num > 0) {
            let x = num % 8;
            num = Math.floor( num / 8);
            oct += x;
        }
        return oct;
    }
    
    isPalindrome( str) {
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
            if (str[i] != str[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    
    findBothPalindrome( start,  end) {
        for (let i = start; i <= end; i++) {

            let decimal = i + ""; //convert digit to string by adding ""
            if (this.isPalindrome(decimal)) {
                let oct = this.decimalToOctal(i);
                if ( this.isPalindrome(oct)) {
                    console.log(oct + " ");
                }
            }
        }
    }
    
    
}


let d = new DecimalOctalPalindrome();

//1 2 3 4 5 6 7 11 171 444 515 565 636 1111
d.findBothPalindrome(1, 1000);

