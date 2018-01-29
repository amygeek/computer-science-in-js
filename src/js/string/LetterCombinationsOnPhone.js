

class LetterCombinationsOnPhone {
    
    constructor() {
        this.map = new Map();
    }

    letterCombinations( digits ) {

        this.map.set(2, ["a","b","c"]);
        this.map.set(3, ["d","e","f"]);
        this.map.set(4, ["g","h","i"]);
        this.map.set(5, ["j","k","l"]);
        this.map.set(6, ["m","n","o"]);
        this.map.set(7, ["p","q","r","s"]);
        this.map.set(8, ["t","u","v"]);
        this.map.set(9, ["w","x","y","z"]);

        return this.combine( digits );

    }
    combine( digits) {

        let res = [];

        if(digits.length == 0) {

            res.add(new String(""));

        } else if(digits.length == 1) {

            for(let c of this.map.get(parseInt(digits))) {
                res.push(c);
            }
            return res;

        } else {
            for(let s of this.combine(digits.substr(1))) {

                for( let c of this.map.get( parseInt( digits.substr( 0,1 ) ) ) ) {
                    res.push(c + s);
                }

            }
        }
        return res;
    }

}

let LCOfPhone = new LetterCombinationsOnPhone();

//[adg, bdg, cdg, aeg, beg, ceg, afg, bfg, cfg, adh, bdh, cdh, aeh, beh, ceh, afh, bfh, cfh, adi, bdi, cdi, aei, bei, cei, afi, bfi, cfi]

console.log(LCOfPhone.letterCombinations("234"));