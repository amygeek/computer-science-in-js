import reorderPopularWords from '../src/js/ReorderPopularWords';

describe("Count Duplicate Words", () => {
    
    it('should return total count of each dupicate words', () => {
        
        var arr = ["pear", "pear", "cherry", "apple", "apple", "pear", "apple", "banana", "pear"];
        
        var newArr = reorderPopularWords(arr);
        
        expect(newArr).toEqual(['pear', 'apple', 'cherry', 'banana']);
    });
});