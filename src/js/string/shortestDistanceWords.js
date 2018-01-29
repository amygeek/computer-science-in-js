//find the shortest distance for any two words in large text file

let shortest = ( book, word1, word2 ) => {

    let min = Number.MAX_VALUE;
    let lastPosWord1 = -1;
    let lastPosWord2 = -1;

    let n = book.length;

    for ( let i=0; i<n; i++) {
        let word = book[i];

        if ( word === word1 ) {
            lastPosWord1 = i;

            let distance = lastPosWord1 - lastPosWord2;
            if ( lastPosWord2 !== -1 && distance < min ) {
                min = distance;
            }
        } else if ( word === word2 ) {
            lastPosWord2 = i;
            let distance = lastPosWord2 - lastPosWord1;
            if ( lastPosWord1 !== -1 && distance < min ) {
                min = distance;
            }
        }
    }
    return min;
}

let getText = ( book ) => {

    book = book.replace(/\./g, " ").replace(/,/g, " ").replace(/-/g, ' ');

    return book.split(" ");
}
let book = "As they rounded a bend in the path that ran beside the river, Lara recognized the silhouette of a fig tree atop a nearby hill. The weather was hot and the days were long. The fig tree was in full leaf, but not yet bearing fruit. "
    + "Soon Lara spotted other landmarks�an outcropping of limestone beside the path that had a silhouette like a face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised. They were drawing near to the place where there was an island in the river. The island was a good spot to make camp. They would sleep on the island tonight."
    + "Lara had been back and forth along the river path many times in her short life. Her people had not created the path it had always been there, like the river�but their deerskin-shod feet and the wooden wheels of their handcarts kept the path well worn. Lara�s people were salt traders, and their livelihood took them on a continual journey. ";

book = getText(book);

console.log(shortest( book, "Lara", "the"));
console.log(shortest( book, "life", 'a'));