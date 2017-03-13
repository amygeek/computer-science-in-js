import {findSumOfTwo, findSumOfTwoV2} from '../src/js/findSumOfTwo';

describe("Sum of Two Values, determine if there are any two integers in the array which sum equal to the given value", () => {
	
	let arr = [1, 2, 6, 7, 8, 10];
	it('finds sum of two values in an array', () => {
		
		let output = findSumOfTwoV2(arr, 10);
        
        expect(output).toEqual("found at index  1 and 4");
	});
});