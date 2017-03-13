import revertString from '../src/js/RevertString';

describe('Revert String', () => {
	
	let rString;
	
	beforeEach( () => {
		rString = new revertString();
	});
		
		
	
	it('should revert string', () => {
		
		let s = "123456789";
		
		let revertS = rString.revertByLen(s);
		expect(revertS).toEqual('987654321');
	});
});