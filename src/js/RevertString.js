class RevertString {
	
	revertByLen(s) {
		let arr = s.split('');
		for(let i=0, l=arr.length; i<l/2; i++) {
			let temp = arr[i];
			arr[i] = arr[l-i-1];
			arr[l-i-1] = temp;
			
		}
		
		return arr.join('');
	}
	
}

export default RevertString;