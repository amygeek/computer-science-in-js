
//  It is simple backtracking algorithm
class Boggle {

    constructor(grid, dictionary) {
        this.grid = grid;
        this.dictionary = dictionary;
        this.state = [];
        this.size = grid.length;

        for (let i = 0; i < this.size; i++) {
            this.state.push ( new Array( this.size).fill( false ));
        }

    }

    isPrefix( str ) {

        if (str === "") {
            return true;
        }
        //let n = this.dictionary.size;

        for ( let val of this.dictionary ) {
            if ( val.indexOf( str ) !== -1 ) {
                return true;
            }
        }

        return false;
    }

    find_all_nbrs( x, y ) {
        
        let nbrs = [];
        
        let startX = Math.max(0, x - 1);
        let startY = Math.max(0, y - 1);
        let endX = Math.min(this.size - 1, x + 1);
        let endY = Math.min(this.size - 1, y + 1);

        for (let i = startX; i <= endX; i++) {
            
            for (let j = startY; j <= endY; j++) {
                if (i === x && j === y) {
                    continue;
                }
                if (this.state[i][j] === false) {
                    nbrs.push([i, j]);
                }
            }
        }

        return nbrs;
    }

    find_words_rec(i, j, current, words) {

        if (current.length > 0 && this.dictionary.has(current)) {
            words.add(current);
        }

        // we can really speed up our algorithm if we have prefix method available for our dictionary by using code like below
        //21.239ms without check the prefix in the dictionary. 3.919ms with the check
        if (!this.isPrefix( current ) ) {
            // if current word is not prefix of any word in dictionary, we don't need to continue with search
            return;
        }

        let nbrs = this.find_all_nbrs(i, j);
        //console.log(nbrs)

        for (let k = 0; k < nbrs.length; k++) {
            let first = nbrs[k][0];
            let second = nbrs[k][1];
            current += this.grid[first][second];
            this.state[first][second] = true;

            this.find_words_rec(first, second, current, words);
            current = current.substr(0, current.length - 1);
            this.state[first][second] = false;
        }
    }

    find_all_words() {
        let words = new Set([]);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let current_word = "";
                this.find_words_rec(i, j, current_word, words);
            }
        }
        return words;
    }
}

let g = [
    ['c', 'a', 't'],
    ['r', 'r', 'e'],
    ['t', 'o', 'n']];
let dict = new Set(['cat', 'cater', 'art', 'toon', 'moon', 'not', 'eat', 'ton']);
let boggle = new Boggle(g, dict);

console.time("find words");
console.log( boggle.find_all_words() );   //Set { 'art', 'cat', 'cater', 'eat', 'ton', 'not' }
console.timeEnd("find words")