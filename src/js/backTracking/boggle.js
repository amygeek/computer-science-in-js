
//  It is simple backtracking algorithm
class Boggle {
    constructor(grid, dictionary) {
        this.grid = grid;
        this.dictionary = dictionary;
        this.state = [];

        for (let i = 0; i < grid.length; i++) {
            let temp = [];
            for (let j = 0; j < grid.length; j++) {
                temp.push(false);
            }
            this.state.push(temp);
        }
    }

    find_all_nbrs(x, y) {
        let nbrs = [];
        let start_x = Math.max(0, x - 1);
        let start_y = Math.max(0, y - 1);
        let end_x = Math.min(this.grid.length - 1, x + 1);
        let end_y = Math.min(this.grid.length - 1, y + 1);

        for (let i = start_x; i <= end_x; i++) {
            for (let j = start_y; j <= end_y; j++) {
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

        //  we can really speed up our algorithm if we have prefix method available
        //  for our dictionary by using code like below

        // if not dictionary.is_prefix(current):
        //   // if current word is not prefix of any word in dictionary
        //   // we don't need to continue with search
        //   return

        let nbrs = this.find_all_nbrs(i, j);
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
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid.length; j++) {
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

console.log( boggle.find_all_words() );   //Set { 'art', 'cat', 'cater', 'eat', 'ton', 'not' }