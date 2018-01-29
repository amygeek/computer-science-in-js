class ShuffleCards {

    randomInt(low, high) {
        return parseInt( Math.random() * (high - low + 1) + low );
    }

    swap( cards, i, j) {
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    shuffleIterative( cards ) {
        let n = cards.length;
        for(let i=0; i<n; i++ ) {
            let temp = this.randomInt(0, i);
            this.swap(cards, temp, i);
        }
    }
    shuffleRec( cards, i) {
        if ( i === 0 ) {
            return cards
        }

        this.shuffleRec(cards, i - 1);
        let temp = this.randomInt(0, i);
        this.swap(cards, temp, i);
        return cards;
    }
}

let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let shuffleCards = new ShuffleCards();

//shuffleCards.shuffleIterative(cards);
shuffleCards.shuffleRec(cards, cards.length - 1);
console.log(cards);