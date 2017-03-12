

let highestOccurredChar = (s) => {
	
	if (s.length === 0 ) {
		return 0;
	}

	let arr = s.split('');
	let arrOccurred = {};
	
	for(let i = 0, l = arr.length; i<l; i++) {
		
		if(arrOccurred.hasOwnProperty(arr[i])) {
			arrOccurred[arr[i]]++;
		} else {
			arrOccurred[arr[i]] = 1;
		}
		
	}
	
	console.log("arrOccurred1 ", arrOccurred);
	arrOccurred = Object.keys(arrOccurred).reduce(function(a, b) { 
		return arrOccurred[a] > arrOccurred[b] ? a : b; 
	});
	
	console.log("arrOccurred2 ", arrOccurred);
	return arrOccurred;
	
}
	
export default highestOccurredChar;
