import reorderPopularWords from '../src/js/ReorderPopularWords';

describe("Reorder words in array based their popularity. ", () => {
    
    it('should return an array that is sorted by the highest count', () => {
        
        var arr = ["pear", "pear", "cherry", "apple", "apple", "pear", "apple", "banana", "pear"];

        arr.sort();
        var newArr = reorderPopularWords(arr);
        
        expect(newArr).toEqual(['pear', 'pear', 'pear', 'pear', 'apple', 'apple', 'apple', 'banana', 'cherry' ]);
    });
});